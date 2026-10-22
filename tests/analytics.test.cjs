const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const vm = require("node:vm");
const source = readFileSync(require("node:path").join(__dirname, "../analytics.js"), "utf8");

function setup({ hostname = "batuhantnk.github.io", saved = null, storageFails = false } = {}) {
  const elements = new Map();
  const listeners = {};
  const scripts = [];
  const clearedCookies = [];
  const storage = new Map(saved ? [["portfolio-analytics-consent-v1", saved]] : []);
  function element(id) {
    if (!elements.has(id)) elements.set(id, {
      hidden: true, textContent: "", handlers: {},
      addEventListener(name, handler) { this.handlers[name] = handler; },
      focus() {},
      click() { this.handlers.click(); }
    });
    return elements.get(id);
  }
  const document = {
    documentElement: { lang: "tr" },
    referrer: "https://www.google.com/search?q=private-query",
    getElementById: element,
    createElement() { return {}; },
    head: { appendChild(script) { scripts.push(script); } },
    addEventListener(name, handler) { listeners[`document:${name}`] = handler; },
    get cookie() { return "_ga=old; _ga_K2RYCW7V7J=old; theme=dark"; },
    set cookie(value) { clearedCookies.push(value); }
  };
  const window = { addEventListener(name, handler) { listeners[name] = handler; } };
  const context = vm.createContext({
    document, window, URL, Date,
    location: { hostname, origin: `https://${hostname}`, pathname: "/", href: `https://${hostname}/?email=private#/tr/anasayfa` },
    localStorage: {
      getItem(key) { if (storageFails) throw new Error("blocked"); return storage.get(key) || null; },
      setItem(key, value) { if (storageFails) throw new Error("blocked"); storage.set(key, value); }
    }
  });
  vm.runInContext(source, context);
  return {
    window, document, element, scripts, clearedCookies, listeners,
    commands: () => Array.from(window.dataLayer || [], (item) => Array.from(item)),
    events: () => Array.from(window.dataLayer || [], (item) => Array.from(item)).filter((item) => item[0] === "event"),
    page(slug = "anasayfa") { window.portfolioAnalytics.pageView("tr", slug, `${slug} — Batuhan Tonk`); },
    clickLink(href) { listeners["document:click"]({ target: { closest: () => ({ href }) } }); }
  };
}

test("no Google script or event before permission; rejected visits are not replayed", () => {
  const app = setup();
  app.page();
  app.page("iletisim");
  app.window.portfolioAnalytics.contactSubmitted();
  app.clickLink("https://github.com/BatuhanTNK");
  assert.equal(app.scripts.length, 0);
  assert.equal(app.events().length, 0);
  assert.equal(app.element("analyticsConsent").hidden, false);
  app.element("analyticsAccept").click();
  assert.equal(app.scripts.length, 1);
  assert.equal(app.events().length, 1);
  assert.equal(app.events()[0][2].page_path, "/tr/iletisim");
});

test("one view per route, including language changes; sanitized URLs and referrers", () => {
  const app = setup({ saved: "granted" });
  app.page();
  app.page();
  app.page("deneyimler");
  app.document.documentElement.lang = "en";
  app.window.portfolioAnalytics.pageView("en", "projects", "Projects — Batuhan Tonk");
  const views = app.events();
  assert.equal(views.length, 3);
  assert.equal(views[0][2].page_referrer, "https://www.google.com/");
  assert.equal(views[1][2].page_referrer, "https://batuhantnk.github.io/#/tr/anasayfa");
  assert.equal(views[2][2].language, "en");
  assert.equal(app.element("analyticsAccept").textContent, "Allow");
  assert.ok(!JSON.stringify(app.commands()).includes("private"));
  const config = app.commands().find((row) => row[0] === "config");
  assert.equal(config[2].send_page_view, false);
  assert.equal(config[2].allow_google_signals, false);
});

test("outbound and successful contact events contain no form data or link query", () => {
  const app = setup({ saved: "granted" });
  app.page("iletisim");
  app.clickLink("https://github.com/BatuhanTNK?email=private#token");
  app.clickLink("mailto:private@example.com");
  app.clickLink("https://batuhantnk.github.io/#/tr/hakkimda");
  app.window.portfolioAnalytics.contactSubmitted();
  assert.deepEqual(app.events().map((row) => row[1]), ["page_view", "click", "contact_click", "generate_lead"]);
  assert.equal(app.events()[1][2].link_url, "https://github.com/BatuhanTNK");
  assert.equal(app.events()[2][2].contact_method, "email");
  assert.ok(!JSON.stringify(app.commands()).includes("private"));
});

test("revoking permission stops events, clears only analytics cookies, and allows re-enabling", () => {
  const app = setup({ saved: "granted" });
  app.page();
  app.element("analyticsReject").click();
  app.page("iletisim");
  app.window.portfolioAnalytics.contactSubmitted();
  assert.equal(app.events().length, 1);
  assert.equal(app.window["ga-disable-G-K2RYCW7V7J"], true);
  assert.equal(app.clearedCookies.length, 6);
  assert.ok(app.clearedCookies.every((value) => value.startsWith("_ga")));
  app.element("analyticsAccept").click();
  assert.equal(app.events().length, 2);
  assert.equal(app.scripts.length, 1);
  assert.equal(app.window["ga-disable-G-K2RYCW7V7J"], false);
});

test("local previews never load Google or send events, even when allowed", () => {
  const app = setup({ hostname: "127.0.0.1", saved: "granted" });
  app.page();
  app.element("analyticsAccept").click();
  app.window.portfolioAnalytics.contactSubmitted();
  assert.equal(app.scripts.length, 0);
  assert.equal(app.commands().length, 0);
});

test("saved refusal, unavailable storage and cross-tab revocation are handled", () => {
  const denied = setup({ saved: "denied" });
  denied.page();
  assert.equal(denied.element("analyticsConsent").hidden, true);
  assert.equal(denied.scripts.length, 0);
  const blocked = setup({ storageFails: true });
  blocked.page();
  blocked.element("analyticsAccept").click();
  assert.equal(blocked.events().length, 1);
  blocked.listeners.storage({ key: "portfolio-analytics-consent-v1", newValue: "denied" });
  blocked.page("iletisim");
  assert.equal(blocked.events().length, 1);
});
