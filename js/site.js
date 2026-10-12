/* =====================================================================
   NASOURAI PHARM — scripts communs
   En-tête + pied de page partagés, catalogue, fiche produit, formulaire.
   ===================================================================== */
(function () {
  "use strict";
  const D = window.NP;
  const C = D.contacts;
  const page = document.body.dataset.page;

  /* ---------- Icônes ---------- */
  const I = {
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    download: '<path d="M12 3v12m0 0-5-5m5 5 5-5M5 21h14"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    truck: '<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
    headset: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z"/>',
    box: '<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    pharmacy: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/>',
    hospital: '<path d="M3 21h18M5 21V7l7-4 7 4v14"/><path d="M12 9v6M9 12h6"/>',
    clinic: '<path d="M4 21V10l8-6 8 6v11"/><path d="M10 21v-5h4v5"/>',
    stetho: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/>',
    flask: '<path d="M9 3h6M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3L14 9V3"/><path d="M7 15h10"/>',
    store: '<path d="M3 9 5 3h14l2 6"/><path d="M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0zM5 13v8h14v-8"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'
  };
  const ico = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;
  const waIco = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.8L0 24l6.3-1.7A11.8 11.8 0 0 0 24 12c0-3.2-1.2-6.1-3.5-8.4z"/></svg>';

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const catById = (id) => D.categories.find((c) => c.id === id);
  const prodBySlug = (s) => D.products.find((p) => p.slug === s);
  const img = (slug, n) => `assets/img/produits/${slug}${n && n > 1 ? "-" + n : ""}.jpg`;
  const pdf = (slug) => `assets/fiches/${slug}.pdf`;
  const countIn = (cat) => D.products.filter((p) => p.cat === cat).length;
  const waLink = (text) => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(text)}`;
  const $ = (s, r = document) => r.querySelector(s);
  // Les liens utilisent « page.html#cle » : le # survit aux redirections des hébergeurs (cleanUrls),
  // contrairement à « ?p= ». L'ancien format « ?p= / ?cat= / ?produit= » reste accepté.
  const hashKey = (legacy) => decodeURIComponent(location.hash.slice(1)) || new URLSearchParams(location.search).get(legacy) || "";

  /* ---------- En-tête ---------- */
  function header() {
    const cur = (p) => (p === page ? ' aria-current="page"' : "");
    const drop = D.categories.map((c) =>
      `<a href="produits.html#${c.id}"><img src="${img(c.cover)}" alt="" loading="lazy">${esc(c.name)}</a>`).join("");
    const mobileCats = D.categories.map((c) => `<a class="mnav__sub" href="produits.html#${c.id}">${esc(c.name)}</a>`).join("");
    const html = `
<div class="topbar"><div class="container">
  <div class="topbar__list">
    <a class="topbar__item" href="tel:${C.commercial.tel}">${ico("phone")}Commercial : ${C.commercial.display}</a>
    <a class="topbar__item topbar__hide-sm" href="tel:${C.standard.tel}">${ico("phone")}Standard : ${C.standard.display}</a>
  </div>
  <a class="topbar__item topbar__addr" href="${C.mapsUrl}" target="_blank" rel="noopener">${ico("pin")}Route de Tessala, Sidi Bel Abbès</a>
</div></div>
<header class="header"><div class="container">
  <a class="brand" href="index.html" aria-label="NASOURAI PHARM, accueil">
    <img src="assets/img/brand/logo-mark.png" alt="" width="72" height="40">
    <span class="brand__text"><span class="brand__name">NASOURAI</span><span class="brand__sub">PHARM</span></span>
  </a>
  <nav class="nav" aria-label="Navigation principale">
    <a class="nav__link" href="index.html"${cur("home")}>Accueil</a>
    <div class="nav__drop">
      <a class="nav__link" href="produits.html"${cur("catalog")} aria-haspopup="true">Nos produits ${ico("chevron")}</a>
      <div class="dropdown">${drop}<a class="dropdown__all" href="produits.html">Voir tout le catalogue ${ico("arrow")}</a></div>
    </div>
    <a class="nav__link" href="a-propos.html"${cur("about")}>À propos</a>
    <a class="nav__link" href="contact.html"${cur("contact")}>Contact</a>
  </nav>
  <a class="btn btn--primary header__cta" href="contact.html">Demander un devis</a>
  <button class="burger" type="button" aria-label="Ouvrir le menu" aria-expanded="false">${ico("menu")}</button>
</div></header>
<div class="mnav" aria-hidden="true"><div class="mnav__panel" role="dialog" aria-label="Menu">
  <button class="mnav__close" type="button" aria-label="Fermer le menu">${ico("close")}</button>
  <a href="index.html">Accueil</a>
  <a href="produits.html">Nos produits</a>
  ${mobileCats}
  <a href="a-propos.html">À propos</a>
  <a href="contact.html">Contact</a>
  <a class="btn btn--primary" href="contact.html">Demander un devis</a>
</div></div>`;
    $("#site-header").outerHTML = html;

    const m = $(".mnav"), b = $(".burger");
    const toggle = (open) => {
      m.classList.toggle("is-open", open);
      m.setAttribute("aria-hidden", String(!open));
      b.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };
    b.addEventListener("click", () => toggle(true));
    $(".mnav__close").addEventListener("click", () => toggle(false));
    m.addEventListener("click", (e) => { if (e.target === m) toggle(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggle(false); });
  }

  /* ---------- Pied de page ---------- */
  function footer() {
    const cats = D.categories.map((c) => `<li><a href="produits.html#${c.id}">${esc(c.name)}</a></li>`).join("");
    $("#site-footer").outerHTML = `
<footer class="footer"><div class="container">
  <div class="footer__grid">
    <div>
      <a class="footer__logo" href="index.html"><img src="assets/img/brand/logo.png" alt="NASOURAI PHARM SARL" loading="lazy"></a>
      <p>Importateur et distributeur de dispositifs médicaux à Sidi Bel Abbès. Nous équipons pharmacies, cliniques, hôpitaux et laboratoires.</p>
    </div>
    <div><h4>Navigation</h4><ul>
      <li><a href="index.html">Accueil</a></li><li><a href="produits.html">Nos produits</a></li>
      <li><a href="a-propos.html">À propos</a></li><li><a href="contact.html">Contact et devis</a></li>
    </ul></div>
    <div><h4>Catégories</h4><ul>${cats}</ul></div>
    <div><h4>Contact</h4><ul class="footer__contact">
      <li>${ico("phone")}<span>Standard : <a href="tel:${C.standard.tel}">${C.standard.display}</a></span></li>
      <li>${ico("phone")}<span>Contact : <a href="tel:${C.contact.tel}">${C.contact.display}</a></span></li>
      <li>${ico("phone")}<span>Commercial : <a href="tel:${C.commercial.tel}">${C.commercial.display}</a></span></li>
      <li>${ico("pin")}<span><a href="${C.mapsUrl}" target="_blank" rel="noopener">${esc(C.address)}</a></span></li>
    </ul></div>
  </div>
  <div class="footer__bottom">
    <span>© ${new Date().getFullYear()} SARL NASOURAI PHARM. Tous droits réservés.</span>
    <span>Dispositifs médicaux destinés aux professionnels de santé.</span>
  </div>
</div></footer>
<a class="wa-float" href="${waLink("Bonjour NASOURAI PHARM, je souhaite un renseignement.")}" target="_blank" rel="noopener" aria-label="Nous écrire sur WhatsApp">${waIco}</a>`;
  }

  /* ---------- Carte produit ---------- */
  function card(p, opts = {}) {
    const c = catById(p.cat);
    return `<article class="prod-card reveal">
  ${opts.badge && p.brand ? `<span class="badge">${esc(p.brand)}</span>` : ""}
  <a class="prod-card__img" href="produit.html#${p.slug}" tabindex="-1" aria-hidden="true"><img src="${img(p.slug)}" alt="" loading="lazy" width="600" height="600"></a>
  <div class="prod-card__body">
    <span class="prod-card__cat">${esc(c.short)}</span>
    <h3 class="prod-card__name"><a href="produit.html#${p.slug}">${esc(p.name)}</a></h3>
    <p class="prod-card__desc">${esc(p.short)}</p>
    <div class="prod-card__foot">
      <span class="prod-card__more">Voir le produit ${ico("arrow")}</span>
      <a class="prod-card__pdf" href="${pdf(p.slug)}" download title="Télécharger la fiche technique (PDF)">${ico("download")}Fiche PDF</a>
    </div>
  </div>
</article>`;
  }

  /* ---------- Accueil ---------- */
  function home() {
    const cg = $("#home-cats");
    if (cg) cg.innerHTML = D.categories.map((c) => `
<a class="cat-card reveal" href="produits.html#${c.id}">
  <div class="cat-card__img"><img src="${img(c.cover)}" alt="" loading="lazy"></div>
  <div class="cat-card__body">
    <h3>${esc(c.name)}</h3>
    <p>${esc(c.text)}</p>
    <span class="cat-card__count">${countIn(c.id)} produit${countIn(c.id) > 1 ? "s" : ""} ${ico("arrow")}</span>
  </div>
</a>`).join("");
    const fg = $("#home-featured");
    if (fg) fg.innerHTML = D.products.filter((p) => p.featured).slice(0, 8).map((p) => card(p)).join("");
    const bloc = $("#home-bloc-links");
    if (bloc) bloc.innerHTML = D.products.filter((p) => p.cat === "bloc").map((p) =>
      `<a class="mini-link" href="produit.html#${p.slug}"><img src="${img(p.slug)}" alt="" loading="lazy">${esc(p.name.replace(/ \+ chariot offert/i, ""))}</a>`).join("");
    const cons = $("#home-cons-links");
    if (cons) cons.innerHTML = D.products.filter((p) => p.cat === "consommables" || p.cat === "instrumentation" || p.cat === "soins").map((p) =>
      `<a class="mini-link" href="produit.html#${p.slug}"><img src="${img(p.slug)}" alt="" loading="lazy">${esc(p.name)}</a>`).join("");
    const n = $("#home-count");
    if (n) n.textContent = D.products.length;
  }

  /* ---------- Catalogue ---------- */
  function catalog() {
    const fromHash = () => (catById(hashKey("cat")) ? hashKey("cat") : "all");
    let cat = fromHash();
    let q = "";
    const grid = $("#grid"), count = $("#count"), intro = $("#cat-intro"), input = $("#q");
    input.value = q;

    const btn = (id, label, n) => `<button type="button" data-cat="${id}" aria-pressed="${id === cat}">${esc(label)} <span>${n}</span></button>`;
    $("#filters").innerHTML = `<div class="filters__title">Catégories</div>` + btn("all", "Tous les produits", D.products.length) +
      D.categories.map((c) => btn(c.id, c.name, countIn(c.id))).join("");
    $("#chips").innerHTML = [`<button type="button" data-cat="all" aria-pressed="${cat === "all"}">Tous</button>`]
      .concat(D.categories.map((c) => `<button type="button" data-cat="${c.id}" aria-pressed="${c.id === cat}">${esc(c.short)}</button>`)).join("");

    const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    function render() {
      const nq = norm(q.trim());
      const list = D.products.filter((p) => (cat === "all" || p.cat === cat) &&
        (!nq || norm(p.name + " " + p.short + " " + p.brand + " " + catById(p.cat).name).includes(nq)));
      grid.innerHTML = list.length ? list.map((p) => card(p)).join("")
        : `<div class="empty" style="grid-column:1/-1">Aucun produit ne correspond à « ${esc(q)} ».<br><a href="contact.html">Contactez-nous</a> : nous pouvons sourcer la référence pour vous.</div>`;
      count.textContent = `${list.length} produit${list.length > 1 ? "s" : ""}`;
      const c = catById(cat);
      intro.hidden = !c;
      if (c) intro.innerHTML = `<img src="${img(c.cover)}" alt=""><div><h2>${esc(c.name)}</h2><p>${esc(c.text)}</p></div>`;
      document.querySelectorAll("[data-cat]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === cat)));
      $("#page-title").textContent = c ? c.name : "Nos produits";
      $("#crumb-cat").textContent = c ? c.name : "Tous les produits";
      document.title = `${c ? c.name : "Nos produits"} | NASOURAI PHARM`;
      reveal();
    }
    function sync() {
      history.replaceState(null, "", location.pathname + (cat === "all" ? "" : "#" + cat));
    }
    document.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-cat]");
      if (!b) return;
      cat = b.dataset.cat; sync(); render();
    });
    input.addEventListener("input", () => { q = input.value; render(); });
    // Clic sur une catégorie du menu alors qu'on est déjà sur le catalogue
    window.addEventListener("hashchange", () => { cat = fromHash(); render(); window.scrollTo(0, 0); });
    render();
  }

  /* ---------- Fiche produit ---------- */
  function product() {
    const p = prodBySlug(hashKey("p"));
    const root = $("#product");
    if (!p) {
      root.innerHTML = `<div class="container section"><div class="empty">Produit introuvable. <a href="produits.html">Retour au catalogue</a></div></div>`;
      return;
    }
    const c = catById(p.cat);
    document.title = `${p.name} | NASOURAI PHARM`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", `${p.name} : ${p.short} Fiche technique à télécharger. NASOURAI PHARM, Sidi Bel Abbès.`);

    const n = p.images || 1;
    const thumbs = n > 1 ? `<div class="gallery__thumbs">${Array.from({ length: n }, (_, i) =>
      `<button type="button" data-src="${img(p.slug, i + 1)}" aria-pressed="${i === 0}" aria-label="Photo ${i + 1}"><img src="${img(p.slug, i + 1)}" alt=""></button>`).join("")}</div>` : "";
    const specs = p.specs.map((s) => {
      const i = s.indexOf(" : ");
      return i > 0 ? `<li><span class="k">${esc(s.slice(0, i))}</span><span>${esc(s.slice(i + 3))}</span></li>` : `<li class="single">${esc(s)}</li>`;
    }).join("");
    const hl = (p.highlights || []).map((h) => `<li>${ico("check")}<span>${esc(h)}</span></li>`).join("");
    const wa = waLink(`Bonjour NASOURAI PHARM, je souhaite un devis pour : ${p.name}.\nQuantité : \nÉtablissement : \nVille : `);
    const related = D.products.filter((x) => x.cat === p.cat && x.slug !== p.slug);
    const more = related.length >= 2 ? related : related.concat(D.products.filter((x) => x.featured && x.cat !== p.cat));

    root.innerHTML = `
<div class="page-head" style="padding:20px 0 0;background:none;border:0"><div class="container">
  <ol class="crumbs"><li><a href="index.html">Accueil</a></li><li><a href="produits.html">Produits</a></li>
  <li><a href="produits.html#${c.id}">${esc(c.name)}</a></li><li aria-current="page">${esc(p.name)}</li></ol>
</div></div>
<div class="container">
  <div class="product" style="padding-top:8px">
    <div class="gallery">
      <div class="gallery__main"><img id="main-img" src="${img(p.slug)}" alt="${esc(p.name)}" width="900" height="900"></div>
      ${thumbs}
    </div>
    <div class="product__info">
      <a class="tag" href="produits.html#${c.id}">${esc(c.name)}</a>
      <h1>${esc(p.name)}</h1>
      <div class="product__brand">Marque : <strong>${esc(p.brand)}</strong></div>
      <p class="product__desc">${esc(p.desc)}</p>
      ${hl ? `<ul class="product__highlights">${hl}</ul>` : ""}
      <div class="product__actions">
        <a class="btn btn--primary" href="${wa}" target="_blank" rel="noopener">${waIco}Demander un devis</a>
        <a class="btn btn--ghost" href="tel:${C.commercial.tel}">${ico("phone")}${C.commercial.display}</a>
      </div>
      <div class="fiche-card">
        <div class="fiche-card__icon">${ico("file")}</div>
        <div><strong>Fiche technique</strong><span>PDF · caractéristiques complètes</span></div>
        <a class="btn btn--teal btn--sm" href="${pdf(p.slug)}" download>${ico("download")}Télécharger</a>
      </div>
    </div>
  </div>

  <div class="specs">
    <div class="specs__table"><h2>Caractéristiques techniques</h2><ul>${specs}</ul></div>
    <aside>
      <div class="side-card">
        <h3>Besoin d'un conseil ?</h3>
        <p class="muted" style="font-size:.92rem">Notre équipe commerciale vous répond et vous envoie un devis.</p>
        <div class="phone-line"><span>Commercial</span><a href="tel:${C.commercial.tel}">${C.commercial.display}</a></div>
        <div class="phone-line"><span>Contact</span><a href="tel:${C.contact.tel}">${C.contact.display}</a></div>
        <div class="phone-line"><span>Standard</span><a href="tel:${C.standard.tel}">${C.standard.display}</a></div>
      </div>
      <div class="side-card">
        <h3>Devis par formulaire</h3>
        <p class="muted" style="font-size:.92rem">Précisez les quantités et votre établissement.</p>
        <a class="btn btn--ghost btn--block" href="contact.html#${p.slug}">Remplir le formulaire</a>
      </div>
    </aside>
  </div>
</div>
<section class="section"><div class="container">
  <div class="section__head"><div><span class="eyebrow">À découvrir aussi</span><h2>${related.length >= 2 ? "Dans la même catégorie" : "Produits recommandés"}</h2></div>
  <a class="link-arrow" href="produits.html#${c.id}">Toute la catégorie ${ico("arrow")}</a></div>
  <div class="prod-grid">${more.slice(0, 4).map((x) => card(x)).join("")}</div>
</div></section>`;

    root.addEventListener("click", (e) => {
      const t = e.target.closest(".gallery__thumbs button");
      if (!t) return;
      $("#main-img").src = t.dataset.src;
      root.querySelectorAll(".gallery__thumbs button").forEach((b) => b.setAttribute("aria-pressed", String(b === t)));
    });
  }

  /* ---------- Formulaire de contact → WhatsApp ---------- */
  function contact() {
    const sel = $("#f-produit");
    if (sel) {
      sel.innerHTML = `<option value="">Choisir un produit (facultatif)</option>` + D.categories.map((c) =>
        `<optgroup label="${esc(c.name)}">${D.products.filter((p) => p.cat === c.id).map((p) => `<option value="${esc(p.name)}" data-slug="${p.slug}">${esc(p.name)}</option>`).join("")}</optgroup>`).join("");
      const pre = hashKey("produit");
      const o = pre && sel.querySelector(`option[data-slug="${CSS.escape(pre)}"]`);
      if (o) o.selected = true;
    }
    const f = $("#quote-form");
    if (!f) return;
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = (id) => ($("#" + id).value || "").trim();
      const lines = [
        "Bonjour NASOURAI PHARM, je souhaite un devis.",
        `Nom : ${v("f-nom")}`,
        `Établissement : ${v("f-type")}${v("f-etab") ? " – " + v("f-etab") : ""}`,
        `Téléphone : ${v("f-tel")}`,
        `Ville / wilaya : ${v("f-ville")}`,
        v("f-produit") ? `Produit : ${v("f-produit")}` : "",
        v("f-msg") ? `Message : ${v("f-msg")}` : ""
      ].filter(Boolean).join("\n");
      window.open(waLink(lines), "_blank", "noopener");
    });
  }

  /* ---------- Apparition au défilement ---------- */
  let io;
  function reveal() {
    const els = document.querySelectorAll(".reveal:not(.is-in)");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
    io = io || new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Icônes déclarées en HTML : <i data-ico="phone"></i> ---------- */
  function inlineIcons() {
    document.querySelectorAll("[data-ico]").forEach((el) => {
      el.outerHTML = el.dataset.ico === "whatsapp" ? waIco : ico(el.dataset.ico);
    });
  }

  /* ---------- Loader : compteur + tracé ECG, une fois par visite ---------- */
  function preloader() {
    const pl = $("#preloader");
    if (!pl || !document.documentElement.classList.contains("pl-on")) return;
    try { sessionStorage.setItem("np-seen", "1"); } catch (e) {}

    // Ligne de base + 3 battements (onde P, complexe QRS, onde T)
    const base = 55;
    let d = `M0 ${base}`;
    [70, 250, 430].forEach((x) => {
      d += ` L${x} ${base} Q${x + 10} ${base - 10} ${x + 20} ${base} L${x + 32} ${base} L${x + 38} ${base + 10}` +
           ` L${x + 46} 6 L${x + 54} ${base + 26} L${x + 60} ${base} L${x + 76} ${base} Q${x + 92} ${base - 16} ${x + 108} ${base}`;
    });
    d += ` L560 ${base}`;
    const path = $("#plPath"), count = $("#plCount"), bar = $("#plBar");
    path.setAttribute("d", d);
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;

    const DURATION = 2100;
    const ease = (t) => (t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
    const t0 = Date.now();
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      pl.classList.add("is-done");
      setTimeout(() => { document.documentElement.classList.remove("pl-on"); pl.remove(); }, 1300);
    };
    const tick = () => {
      const k = ease(Math.min((Date.now() - t0) / DURATION, 1));
      count.textContent = String(Math.round(k * 100)).padStart(3, "0");
      path.style.strokeDashoffset = len * (1 - k);
      bar.style.transform = `scaleX(${k})`;
      if (k < 1) setTimeout(tick, 16); else setTimeout(finish, 250);
    };
    tick();
    setTimeout(finish, 6000); // sécurité
  }

  preloader();
  header();
  footer();
  inlineIcons();
  if (page === "home") home();
  if (page === "catalog") catalog();
  if (page === "product") {
    product();
    // Lien vers un autre produit depuis une fiche : seul le # change, on recharge pour l'afficher
    window.addEventListener("hashchange", () => location.reload());
  }
  if (page === "contact") contact();
  reveal();
})();
