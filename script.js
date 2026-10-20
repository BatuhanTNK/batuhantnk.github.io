try { // TOP-LEVEL ERROR WRAPPER

// ========================
// App State
// ========================
let currentLang = "tr";
let currentRouteIndex = 0;

// ========================
// Theme Toggle
// ========================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const html = document.documentElement;

function setTheme(theme) {
  html.setAttribute("data-theme", theme);
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#191c19" : "#f6f4ee";
  if (theme === "light") {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
  const en = html.lang === "en";
  themeToggle.setAttribute("aria-label", theme === "dark" ? (en ? "Switch to light theme" : "Açık temaya geç") : (en ? "Switch to dark theme" : "Koyu temaya geç"));
}

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
let explicitTheme = null;
try { explicitTheme = localStorage.getItem("theme"); } catch (_) {}
if (explicitTheme !== "dark" && explicitTheme !== "light") explicitTheme = null;
setTheme(explicitTheme || (systemTheme.matches ? "dark" : "light"));
systemTheme.addEventListener("change", (event) => {
  if (!explicitTheme) setTheme(event.matches ? "dark" : "light");
});

themeToggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  explicitTheme = current === "dark" ? "light" : "dark";
  try { localStorage.setItem("theme", explicitTheme); } catch (_) {}
  setTheme(explicitTheme);
});

// ========================
// Mobile Menu
// ========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  hamburger.setAttribute("aria-expanded", String(navMenu.classList.contains("active")));
});

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.getElementById("skipLink").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("app").focus();
});

// ========================
// Navbar Scroll Effect
// ========================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ========================
// Language Switcher
// ========================
const langSwitcher = document.getElementById("langSwitcher");
const langOpts = langSwitcher.querySelectorAll(".lang-opt");
const langSlider = langSwitcher.querySelector(".lang-slider");

langOpts.forEach((opt) => {
  opt.addEventListener("click", () => {
    const newLang = opt.dataset.lang;
    if (newLang === currentLang) return;
    const newSlug = getRouteSlug(newLang, currentRouteIndex);
    navigateTo(newLang, newSlug);
  });
});

function updateLangToggle() {
  langOpts.forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.lang === currentLang);
    opt.setAttribute("aria-pressed", String(opt.dataset.lang === currentLang));
  });
  langSlider.classList.toggle("right", currentLang === "en");
}

// ========================
// Hash Router
// ========================
function parseHash() {
  const hash = window.location.hash.replace("#/", "");
  if (!hash) return { lang: null, slug: null };
  const parts = hash.split("/");
  return { lang: parts[0] || null, slug: parts[1] || null };
}

function navigateTo(lang, slug) {
  const newHash = `#/${lang}/${slug}`;
  if (window.location.hash === newHash) {
    handleRoute();
  } else {
    window.location.hash = newHash;
  }
}

function handleRoute() {
  let { lang, slug } = parseHash();

  // Default route - fix lang if missing or invalid
  if (!lang || (lang !== "tr" && lang !== "en")) {
    lang = localStorage.getItem("lang") || "tr";
    slug = getRouteSlug(lang, 0);
    history.replaceState(null, "", `#/${lang}/${slug}`);
  }

  // Fix slug if missing
  if (!slug) {
    slug = getRouteSlug(lang, 0);
    history.replaceState(null, "", `#/${lang}/${slug}`);
  }

  // Fix slug if invalid
  let routeIndex = getRouteIndex(slug);
  if (routeIndex === -1) {
    slug = getRouteSlug(lang, 0);
    routeIndex = 0;
    history.replaceState(null, "", `#/${lang}/${slug}`);
  }

  currentLang = lang;
  currentRouteIndex = routeIndex;
  localStorage.setItem("lang", lang);

  renderApp();
}

window.addEventListener("hashchange", () => {
  handleRoute();
  document.getElementById("app").focus({ preventScroll: true });
});

// ========================
// Logo click
// ========================
document.getElementById("navLogo").addEventListener("click", (e) => {
  e.preventDefault();
  navigateTo(currentLang, getRouteSlug(currentLang, 0));
});

// ========================
// Render App
// ========================
function renderApp() {
  const t = translations[currentLang];
  const app = document.getElementById("app");

  // Update HTML lang
  html.setAttribute("lang", t.htmlLang);
  document.getElementById("skipLink").textContent = currentLang === "tr" ? "İçeriğe geç" : "Skip to content";
  hamburger.setAttribute("aria-label", currentLang === "tr" ? "Menüyü aç / kapat" : "Toggle menu");
  setTheme(html.dataset.theme);

  // Update page title
  document.title = t.pageTitle;

  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.metaDescription);

  // Update lang toggle
  updateLangToggle();

  // Update footer
  document.getElementById("footerText").textContent = t.footer.text;

  // Render nav
  renderNav(t);

  // Render current view
  const viewRenderers = [renderHero, renderAbout, renderSkills, renderExperience, renderCertificates, renderContact];
  app.innerHTML = viewRenderers[currentRouteIndex](t);
  closeMenu();

  // Scroll to top
  window.scrollTo(0, 0);

  // Init reveal animations
  initRevealAnimations();

  // Init view-specific JS
  if (currentRouteIndex === 5) initContactForm(t);
}

// ========================
// Render Navigation
// ========================
function renderNav(t) {
  const navItems = routeNamesByLang[currentLang];
  const navLabels = t.nav;

  navMenu.innerHTML = navItems
    .map((slug, i) => {
      const label = navLabels[slug];
      const isActive = i === currentRouteIndex ? " active" : "";
      return `<li><a href="#/${currentLang}/${slug}" class="nav-link${isActive}"${i === currentRouteIndex ? ' aria-current="page"' : ""} data-route-index="${i}">${label}</a></li>`;
    })
    .join("");

  // Nav link click handlers
  navMenu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      window.location.hash = href;
      closeMenu();
    });
  });
}

// ========================
// View Renderers
// ========================

function projectImage(project, t, eager = false) {
  const size = project.format === "mobile" ? [1080, 2400] : [1265, 712];
  const imageUrl = project.image + (project.imageVersion ? `?v=${encodeURIComponent(project.imageVersion)}` : "");
  return `<a class="work-image-link" href="${imageUrl}" target="_blank" rel="noopener noreferrer" aria-label="${project.title} — ${t.experience.imageLabel}">
    <div class="work-media media-${project.format} media-${project.id}">
      <img src="${imageUrl}" alt="${project.imageAlt}" width="${size[0]}" height="${size[1]}" loading="${eager ? "eager" : "lazy"}" decoding="async">
    </div>
    <span class="work-open" aria-hidden="true"><i class="fas fa-expand"></i></span>
  </a>`;
}

function projectLinks(project, t) {
  return `<div class="project-actions"><a class="text-link" href="${project.href}" target="_blank" rel="noopener noreferrer">${t.experience.codeLabel}<i class="fab fa-github" aria-hidden="true"></i></a>${project.site ? `<a class="text-link" href="${project.site}" target="_blank" rel="noopener noreferrer">${t.experience.siteLabel}<i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>` : ""}</div>`;
}

function featuredWork(project, index, t, detailed = false) {
  const heading = detailed ? "h2" : "h3";
  return `<article class="featured-work${detailed ? " project-detail" : ""}">
    ${projectImage(project, t, !detailed)}
    <div class="work-caption"><span>${project.kind}</span><span>${project.lang}</span></div>
    <div class="work-title-row"><${heading}><a href="${project.href}" target="_blank" rel="noopener noreferrer">${project.title}</a></${heading}><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></div>
    <p>${project.desc}</p>
    ${detailed ? `<ul class="project-features">${project.features.map(feature => `<li>${feature}</li>`).join("")}</ul><div class="experience-tech">${project.tech.map(tech => `<span>${tech}</span>`).join("")}</div>${projectLinks(project, t)}` : ""}
  </article>`;
}

function compactWork(project, t) {
  return `<article class="work-row">
    ${projectImage(project, t)}
    <div class="work-row-copy"><h3><a href="${project.href}" target="_blank" rel="noopener noreferrer">${project.title}</a></h3><p>${project.desc}</p><span class="work-row-kind">${project.kind}</span></div>
    <a class="work-code-link" href="${project.href}" target="_blank" rel="noopener noreferrer" aria-label="${project.title} — ${t.experience.codeLabel}"><i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
  </article>`;
}

function renderHero(t) {
  const h = t.hero;
  const projects = t.experience.projects;
  return `
    <section class="hero" id="hero">
      <div class="container hero-container">
        <div class="hero-heading">
          <h1>${h.titleLine1}<br><span>${h.titleLine2}</span></h1>
          <div class="hero-signature">Batuhan Tonk <span>— ${h.badge}</span></div>
        </div>
        <div class="hero-intro">
          <p class="hero-description">${h.description}</p>
          <a href="#/${currentLang}/${getRouteSlug(currentLang, 5)}" class="text-link">${h.ctaSecondary} <i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          <p class="availability"><span aria-hidden="true"></span>${h.availability}</p>
        </div>
      </div>
    </section>
    <section class="selected-work container" id="selected-work" aria-labelledby="selectedWorkTitle">
      <div class="work-section-heading"><h2 id="selectedWorkTitle">${h.selectedTitle}</h2><a class="text-link" href="#/${currentLang}/${getRouteSlug(currentLang, 3)}">${h.ctaPrimary}<i class="fas fa-arrow-right" aria-hidden="true"></i></a></div>
      <div class="featured-grid">${projects.slice(0, 2).map((p, i) => featuredWork(p, i, t)).join("")}</div>
      <div class="more-work">${projects.slice(2).map(project => compactWork(project, t)).join("")}</div>
    </section>
    <section class="home-about container">
      <h2>${h.aboutTitle}</h2>
      <div><p>${h.aboutText}</p><a class="text-link" href="#/${currentLang}/${getRouteSlug(currentLang, 1)}">${h.aboutLink}<i class="fas fa-arrow-right" aria-hidden="true"></i></a></div>
    </section>
    ${renderCTA(t)}`;
}

function renderCTA(t) {
  return `<section class="cta-section"><div class="container cta-box"><div class="cta-content"><h2>${t.cta.title}</h2><p>${t.cta.description}</p></div><a href="#/${currentLang}/${getRouteSlug(currentLang, 5)}" class="btn btn-primary">${t.cta.button}<i class="fas fa-arrow-right" aria-hidden="true"></i></a></div></section>`;
}

function renderAbout(t) {
  const a = t.about;
  const paragraphs = a.paragraphs.map((p) => `<p>${p}</p>`).join("");
  const highlights = a.highlights
    .map(
      (h) => `
      <div class="highlight-item">
        <div class="highlight-icon"><i class="${h.icon}" aria-hidden="true"></i></div>
        <div>
          <h4>${h.title}</h4>
          <p>${h.text}</p>
        </div>
      </div>`
    )
    .join("");

  return `
    <section class="section" id="about">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-user" aria-hidden="true"></i> ${a.tag}</span>
          <h1 class="section-title">${a.title}</h1>
        </div>
        <div class="about-grid">
          <div class="about-text reveal">
            ${paragraphs}
            <div class="about-highlights">
              ${highlights}
            </div>
          </div>
          <aside class="about-note">
            <h3>${t.hero.practiceTitle}</h3>
            <p>${t.hero.practiceText}</p>
            <ul><li>React & React Native</li><li>Node.js & REST API</li><li>PostgreSQL & MySQL</li><li>${t.hero.integrationLabel}</li></ul>
            <a class="text-link" href="#/${currentLang}/${getRouteSlug(currentLang, 2)}">${t.hero.skillsLink}<i class="fas fa-arrow-right" aria-hidden="true"></i></a>
          </aside>
        </div>
      </div>
    </section>`;
}

function renderSkills(t) {
  const s = t.skills;
  const categoriesHTML = s.categories
    .map((cat) => {
      const tagsHTML = cat.tags
        .map(
          (tag) =>
            `<span class="skill-tag" data-color="${tag.color}"><i class="${tag.icon}" aria-hidden="true"></i> ${tag.label}</span>`
        )
        .join("");
      const descHTML = cat.description ? `<p class="skill-category-desc">${cat.description}</p>` : "";
      return `
        <div class="skill-category reveal">
          <div class="skill-category-header">
            <div class="skill-category-icon"><i class="${cat.icon}" aria-hidden="true"></i></div>
            <h3>${cat.title}</h3>
          </div>
          ${descHTML}
          <div class="skill-tags">${tagsHTML}</div>
        </div>`;
    })
    .join("");

  return `
    <section class="section section-alt" id="skills">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-cogs" aria-hidden="true"></i> ${s.tag}</span>
          <h1 class="section-title">${s.title}</h1>
        </div>
        <div class="skills-grid">
          ${categoriesHTML}
        </div>
      </div>
    </section>`;
}

function renderExperience(t) {
  const e = t.experience;
  const itemsHTML = e.items
    .map((item) => {
      const techHTML = item.tech.map((t) => `<span>${t}</span>`).join("");
      const badgeClass = item.badgeCurrent ? " current" : "";
      const cardClass = item.badgeCurrent ? " featured" : "";
      return `
        <div class="experience-card${cardClass} reveal">
          <div class="card-accent"></div>
          <div class="experience-header">
            <div class="experience-icon"><i class="${item.icon}" aria-hidden="true"></i></div>
            <div class="experience-meta">
              <span class="experience-badge${badgeClass}">${item.badge}</span>
              <span class="experience-date"><i class="fas fa-calendar" aria-hidden="true"></i> ${item.date}</span>
            </div>
          </div>
          <h3>${item.title}</h3>
          <p class="experience-role">${item.role}</p>
          <p>${item.description}</p>
          <div class="experience-tech">${techHTML}</div>
        </div>`;
    })
    .join("");

  return `
    <section class="section" id="experience">
      <div class="container">
        <div class="section-header">
          <h1 class="section-title">${e.title}</h1>
          <p class="section-description">${e.projectsSub}</p>
        </div>
        <div class="project-gallery">${e.projects.map((project, i) => featuredWork(project, i, t, true)).join("")}</div>
        <div class="experience-heading"><h2>${e.experienceHeading}</h2></div>
        <div class="experience-grid">${itemsHTML}</div>
      </div>
    </section>
    ${renderCTA(t)}`;
}

function renderCertificates(t) {
  const c = t.certificates;
  const itemsHTML = c.items
    .map((item) => {
      const tagsHTML = item.tags.map((tag) => `<span>${tag}</span>`).join("");
      return `
        <div class="timeline-item reveal">
          <div class="timeline-dot"><i class="${item.icon}" aria-hidden="true"></i></div>
          <div class="timeline-content">
            <div class="timeline-date">${item.date}</div>
            <h3>${item.title}</h3>
            <p class="timeline-org"><i class="fas fa-university" aria-hidden="true"></i> ${item.org}</p>
            <p>${item.desc}</p>
            <div class="timeline-tags">${tagsHTML}</div>
          </div>
        </div>`;
    })
    .join("");

  return `
    <section class="section section-alt" id="certificates">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-certificate" aria-hidden="true"></i> ${c.tag}</span>
          <h1 class="section-title">${c.title}</h1>
        </div>
        <div class="timeline">
          ${itemsHTML}
        </div>
      </div>
    </section>`;
}

function renderContact(t) {
  const c = t.contact;
  return `
    <section class="section" id="contact">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-tag"><i class="fas fa-paper-plane" aria-hidden="true"></i> ${c.tag}</span>
          <h1 class="section-title">${c.title}</h1>
        </div>
        <div class="contact-grid">
          <div class="contact-info reveal">
            <p class="contact-intro">${c.intro}</p>
            <div class="contact-cards">
              <a href="mailto:batuhan.tonk.1@gmail.com" class="contact-card">
                <div class="contact-card-icon"><i class="fas fa-envelope" aria-hidden="true"></i></div>
                <div>
                  <h4>${c.email}</h4>
                  <p>batuhan.tonk.1@gmail.com</p>
                </div>
              </a>
              <a href="tel:+905411466133" class="contact-card">
                <div class="contact-card-icon"><i class="fas fa-phone" aria-hidden="true"></i></div>
                <div>
                  <h4>${c.phone}</h4>
                  <p>+90 541 146 61 33</p>
                </div>
              </a>
              <div class="contact-card">
                <div class="contact-card-icon"><i class="fas fa-map-marker-alt" aria-hidden="true"></i></div>
                <div>
                  <h4>${c.location}</h4>
                  <p>${c.locationValue}</p>
                </div>
              </div>
            </div>
            <div class="social-links">
              <a href="https://linkedin.com/in/batuhan-tonk-3b520a315" target="_blank" rel="noopener noreferrer" class="social-link linkedin" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/BatuhanTNK" target="_blank" rel="noopener noreferrer" class="social-link github" aria-label="GitHub">
                <i class="fab fa-github" aria-hidden="true"></i>
              </a>
              <a href="mailto:batuhan.tonk.1@gmail.com" class="social-link email" aria-label="Email">
                <i class="fas fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div class="contact-form-wrapper reveal">
            <form aria-label="${c.title}" class="contact-form" id="contactForm" action="https://formspree.io/f/xpqjgrvy" method="POST">
              <div class="form-group">
                <input autocomplete="name" type="text" id="formName" name="name" placeholder="${c.formName}" required>
                <label for="formName">${c.formName}</label>
              </div>
              <div class="form-group">
                <input autocomplete="email" type="email" id="formEmail" name="email" placeholder="${c.formEmail}" required>
                <label for="formEmail">${c.formEmail}</label>
              </div>
              <div class="form-group">
                <textarea id="formMessage" name="message" rows="5" placeholder="${c.formMessage}" required></textarea>
                <label for="formMessage">${c.formMessage}</label>
              </div>
              <button type="submit" class="btn btn-primary btn-full">
                <i class="fas fa-paper-plane" aria-hidden="true"></i>
                ${c.formButton}
              </button>
              <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
            </form>
          </div>
        </div>
      </div>
    </section>`;
}

// ========================
// Contact form
// ========================

function initContactForm(t) {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const c = t.contact;
    const btn = this.querySelector('button[type="submit"]');
    const originalContent = btn.innerHTML;
    const status = document.getElementById("formStatus");
    status.textContent = c.formSending;

    btn.innerHTML = `<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> ${c.formSending}`;
    btn.style.opacity = "0.8";
    btn.disabled = true;

    try {
      const formData = new FormData(this);
      const response = await fetch(this.action, {
        method: this.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        btn.innerHTML = `<i class="fas fa-check" aria-hidden="true"></i> ${currentLang === "tr" ? "Gönderildi" : "Sent"}`;
        btn.style.background = "var(--success)";
        btn.style.opacity = "1";
        status.textContent = c.formSuccess;
        this.reset();
      } else {
        throw new Error("Form error");
      }
    } catch (error) {
      status.textContent = c.formError;
      btn.innerHTML = `<i class="fas fa-times" aria-hidden="true"></i> ${currentLang === "tr" ? "Tekrar deneyin" : "Try again"}`;
      btn.style.background = "var(--error)";
      btn.style.opacity = "1";
    }

    setTimeout(() => {
      btn.innerHTML = originalContent;
      btn.style.background = "";
      btn.disabled = false;
      btn.style.opacity = "";
    }, 3000);
  });
}

// ========================
// Reveal Animations
// ========================
function initRevealAnimations() {
  // Content stays visible without animation or IntersectionObserver support.
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("active"));
}

// ========================
// SPA link handling (CTA, etc.)
// ========================
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#/"]');
  if (link) {
    e.preventDefault();
    window.location.hash = link.getAttribute("href");
  }
});

// ========================
// Init
// ========================
handleRoute();

} catch (e) {
  document.getElementById("app").innerHTML = `<div style="color:red;padding:40px;margin-top:80px;font-size:16px;"><h2>JS Error:</h2><pre>${e.message}\n\n${e.stack}</pre></div>`;
}
