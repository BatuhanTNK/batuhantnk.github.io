// GA4 for the portfolio. Local previews never send analytics requests.
(() => {
  const measurementId = "G-K2RYCW7V7J";
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
  let consent = null;
  let initialized = false;
  let currentPage = null;
  let lastPage = null;
  try { consent = localStorage.getItem(consentKey); } catch (_) {}
  if (consent !== "granted" && consent !== "denied") consent = null;

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
    if (event.newValue === "granted" || event.newValue === "denied") choose(event.newValue, false);
    else {
      choose("denied", false);
      banner.hidden = false;
    }
  });

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;
    const url = new URL(link.href, location.href);
    if (url.protocol === "mailto:" || url.protocol === "tel:") {
      send("contact_click", { contact_method: url.protocol === "mailto:" ? "email" : "phone" });
    } else if ((url.protocol === "https:" || url.protocol === "http:") && url.origin !== location.origin) {
      send("click", { link_domain: url.hostname, link_url: url.origin + url.pathname, outbound: true });
    }
  });

  window.portfolioAnalytics = {
    pageView(language, slug, title) {
      updateLanguage();
      const path = `/${language}/${slug}`;
      currentPage = { language, path, title, location: location.origin + location.pathname + "#" + path };
      trackPage();
    },
    contactSubmitted() {
      send("generate_lead", { form_id: "contactForm", method: "contact_form" });
    }
  };

  updateLanguage();
  banner.hidden = consent !== null;
  if (consent === "granted") initialize();
  else if (consent === "denied") choose("denied", false);
})();
