// GA4 for the portfolio. Local previews never send analytics requests.
(() => {
  const measurementId = "G-K2RYCW7V7J";
  const webhookUrl = "https://script.google.com/macros/s/AKfycbyGracT8A_yDnHBt13PxMYlshNJI0RoOsYtifj5VHDOrAcwPXMfbDfT8Shwgy1-_yw8/exec";
  const consentKey = "portfolio-analytics-consent-v1";
  const isProduction = location.hostname === "batuhantnk.github.io";
  const banner = document.getElementById("analyticsConsent");
  const preferences = document.getElementById("analyticsPreferences");
  const accept = document.getElementById("analyticsAccept");
  const reject = document.getElementById("analyticsReject");
  const copy = {
    tr: {
      title: "Ziyaret istatistikleri",
      description: "İzin verirseniz, ziyaretleri, görüntülenen sayfaları, dış bağlantı tıklamalarını ve başarılı iletişim formu gönderimlerini Google Analytics ile ölçmek için analitik çerezleri kullanırım. Formdaki adınız, e-posta adresiniz ve mesajınız Analytics’e gönderilmez.",
      details: "Google’ın verileri nasıl kullandığı",
      preference: "Çerez tercihleri",
      accept: "İzin ver",
      reject: "Reddet",
      note: "Seçiminiz bu tarayıcıda saklanır. İzninizi sayfanın altındaki Çerez tercihleri bağlantısından değiştirebilirsiniz."
    },
    en: {
      title: "Visitor statistics",
      description: "With your permission, I use analytics cookies with Google Analytics to measure visits, page views, outbound link clicks and successful contact form submissions. Your name, email address and message are not sent to Analytics.",
      details: "How Google uses data",
      preference: "Cookie preferences",
      accept: "Allow",
      reject: "Reject",
      note: "Your choice is saved in this browser. You can change it using Cookie preferences in the footer."
    }
  };
  let consent = "granted";
  let initialized = false;
  let currentPage = null;
  let lastPage = null;
  const sessionStartMs = Date.now();
  const visitedPages = [];
  const sessionActions = [];
  let geoData = {};
  let geoFetched = false;
  let reportSent = false;
  let reportTimer = null;
  try {
    if (localStorage.getItem(consentKey) === "denied") consent = "denied";
  } catch (_) {}

  function formatDateTime(date) {
    try {
      return date.toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });
    } catch (_) {
      return date.toISOString();
    }
  }

  function formatClock(date) {
    try {
      return date.toLocaleTimeString("tr-TR", { timeZone: "Europe/Istanbul" });
    } catch (_) {
      return date.toISOString().slice(11, 19);
    }
  }

  function formatDuration(ms) {
    const totalSec = Math.max(1, Math.round(ms / 1000));
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return mins > 0 ? `${mins} dk ${secs} sn` : `${secs} sn`;
  }

  function fetchGeoInfo() {
    if (!isProduction || consent !== "granted" || geoFetched || typeof fetch !== "function") return;
    geoFetched = true;
    fetch("https://ipwho.is/")
      .then((res) => res.json())
      .then((info) => {
        if (info && info.success !== false && info.country) {
          geoData = {
            ip: info.ip || "",
            country: info.country || "",
            region: info.region || "",
            city: info.city || "",
            isp: (info.connection && (info.connection.isp || info.connection.org)) || "",
            timezone: (info.timezone && info.timezone.id) || ""
          };
          return;
        }
        throw new Error("fallback");
      })
      .catch(() => {
        fetch("https://ipapi.co/json/")
          .then((res) => res.json())
          .then((info) => {
            if (info && info.country_name) {
              geoData = {
                ip: info.ip || "",
                country: info.country_name || "",
                region: info.region || "",
                city: info.city || "",
                isp: info.org || "",
                timezone: info.timezone || ""
              };
            }
          })
          .catch(() => {});
      });
  }

  function sendVisitorNotification() {
    if (!isProduction || consent !== "granted" || reportSent || visitedPages.length === 0) return;
    reportSent = true;
    if (reportTimer && typeof clearTimeout === "function") {
      clearTimeout(reportTimer);
      reportTimer = null;
    }
    const now = Date.now();
    const pages = visitedPages.map((p) => ({
      title: p.title,
      path: p.path,
      enteredAt: p.enteredAt,
      duration: formatDuration((p.leftMs || now) - p.enteredMs)
    }));
    let tz = geoData.timezone || "";
    if (!tz && typeof Intl !== "undefined") {
      try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (_) {}
    }
    const payload = JSON.stringify({
      domain: location.hostname,
      country: geoData.country || "Bilinmiyor",
      region: geoData.region || "",
      city: geoData.city || "",
      ip: geoData.ip || "Bilinmiyor",
      isp: geoData.isp || "Bilinmiyor",
      timezone: tz || "Bilinmiyor",
      startTime: formatDateTime(new Date(sessionStartMs)),
      endTime: formatDateTime(new Date(now)),
      totalDuration: formatDuration(now - sessionStartMs),
      referrer: externalReferrer() || "Doğrudan (Direct)",
      pages,
      actions: sessionActions,
      userAgent: (typeof navigator !== "undefined" && navigator.userAgent) || "-",
      screen: (typeof screen !== "undefined" && screen.width && screen.height) ? `${screen.width}x${screen.height}` : "-",
      language: (typeof navigator !== "undefined" && navigator.language) || document.documentElement.lang || "-"
    });
    if (typeof navigator !== "undefined" && typeof navigator.sendBeacon === "function") {
      navigator.sendBeacon(webhookUrl, payload);
    } else if (typeof fetch === "function") {
      fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        keepalive: true,
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: payload
      }).catch(() => {});
    }
  }

  function updateLanguage() {
    const text = copy[document.documentElement.lang] || copy.tr;
    document.getElementById("analyticsTitle").textContent = text.title;
    document.getElementById("analyticsDescription").textContent = text.description;
    document.getElementById("analyticsDetails").textContent = text.details;
    document.getElementById("analyticsNote").textContent = text.note;
    preferences.textContent = text.preference;
    accept.textContent = text.accept;
    reject.textContent = text.reject;
  }

  function initialize() {
    if (!isProduction || consent !== "granted") return;
    fetchGeoInfo();
    window[`ga-disable-${measurementId}`] = false;
    if (initialized) {
      window.gtag("consent", "update", { analytics_storage: "granted" });
      return;
    }
    initialized = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_location: location.origin + location.pathname,
      page_referrer: externalReferrer()
    });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  function externalReferrer() {
    try { return new URL(document.referrer).origin + "/"; } catch (_) { return ""; }
  }

  function send(name, parameters) {
    if (!initialized || consent !== "granted" || !currentPage) return;
    window.gtag("event", name, { send_to: measurementId, ...parameters });
  }

  function trackPage() {
    if (!initialized || consent !== "granted" || !currentPage || currentPage.location === lastPage) return;
    const now = Date.now();
    if (visitedPages.length > 0 && !visitedPages[visitedPages.length - 1].leftMs) {
      visitedPages[visitedPages.length - 1].leftMs = now;
    }
    visitedPages.push({
      path: currentPage.path,
      title: currentPage.title,
      enteredAt: formatClock(new Date(now)),
      enteredMs: now,
      leftMs: null
    });
    if (!reportTimer && !reportSent && typeof setTimeout === "function") {
      reportTimer = setTimeout(sendVisitorNotification, 45000);
      if (reportTimer && typeof reportTimer.unref === "function") reportTimer.unref();
    }
    const parameters = {
      page_title: currentPage.title,
      page_location: currentPage.location,
      page_path: currentPage.path,
      page_referrer: lastPage || externalReferrer(),
      language: currentPage.language
    };
    window.gtag("set", parameters);
    send("page_view", parameters);
    lastPage = currentPage.location;
  }

  function clearAnalyticsCookies() {
    document.cookie.split(";").forEach((entry) => {
      const name = entry.trim().split("=")[0];
      if (name !== "_ga" && !name.startsWith("_ga_")) return;
      ["", `; domain=${location.hostname}`, `; domain=.${location.hostname}`].forEach((domain) => {
        document.cookie = `${name}=; Max-Age=0; path=/${domain}; SameSite=Lax`;
      });
    });
  }

  function choose(value, restoreFocus = true) {
    consent = value;
    try { localStorage.setItem(consentKey, value); } catch (_) {}
    banner.hidden = true;
    if (value === "granted") {
      initialize();
      trackPage();
    } else {
      window[`ga-disable-${measurementId}`] = true;
      if (initialized) window.gtag("consent", "update", { analytics_storage: "denied" });
      clearAnalyticsCookies();
      lastPage = null;
    }
    if (restoreFocus) preferences.focus({ preventScroll: true });
  }

  preferences.addEventListener("click", () => {
    updateLanguage();
    banner.hidden = false;
    reject.focus({ preventScroll: true });
  });
  accept.addEventListener("click", () => choose("granted"));
  reject.addEventListener("click", () => choose("denied"));
  window.addEventListener("storage", (event) => {
    if (event.key !== consentKey) return;
    if (event.newValue === "denied") choose("denied", false);
    else choose("granted", false);
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;
    const url = new URL(link.href, location.href);
    if (url.protocol === "mailto:" || url.protocol === "tel:") {
      sessionActions.push(`İletişim tıklaması (${url.protocol === "mailto:" ? "E-posta" : "Telefon"}) — ${formatClock(new Date())}`);
      send("contact_click", { contact_method: url.protocol === "mailto:" ? "email" : "phone" });
    } else if ((url.protocol === "https:" || url.protocol === "http:") && url.origin !== location.origin) {
      sessionActions.push(`Dış bağlantı tıklaması (${url.hostname}${url.pathname}) — ${formatClock(new Date())}`);
      send("click", { link_domain: url.hostname, link_url: url.origin + url.pathname, outbound: true });
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") sendVisitorNotification();
  });
  window.addEventListener("pagehide", () => sendVisitorNotification());

  window.portfolioAnalytics = {
    pageView(language, slug, title) {
      updateLanguage();
      const path = `/${language}/${slug}`;
      currentPage = { language, path, title, location: location.origin + location.pathname + "#" + path };
      trackPage();
    },
    contactSubmitted() {
      sessionActions.push(`İletişim formu gönderildi — ${formatClock(new Date())}`);
      send("generate_lead", { form_id: "contactForm", method: "contact_form" });
    }
  };

  updateLanguage();
  banner.hidden = true;
  if (consent === "granted") initialize();
  else choose("denied", false);
})();
