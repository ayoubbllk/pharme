/* NASOURAI PHARM — Precision Pulse
   Script partagé : index.html (home), produits.html (catalogue), produit.html (fiche).
   Chaque module vérifie la présence de ses éléments avant de s'exécuter. */
(() => {
"use strict";
const D = window.NP_DATA;
const PAGE = document.body.dataset.page || "home";
document.documentElement.classList.add("js");

/* =============================== I18N =============================== */
const I18N = {
  fr: {
    skip: "Aller au contenu", "pl.cal": "Calibrage du signal",
    "nav.aria": "Navigation principale", "nav.home": "Accueil", "nav.about": "La maison", "nav.catalog": "Catalogue", "nav.why": "Atouts", "nav.process": "Méthode", "nav.contact": "Contact",
    "menu.aria": "Ouvrir le menu", "menu.close": "Fermer le menu",
    "cta.quote": "Demander un devis", "cta.catalog": "Explorer le catalogue",
    "hero.label": "Importateur & distributeur — dispositifs médicaux",
    "hero.l1": "La précision", "hero.l2": "qui <em>soigne</em>.",
    "hero.sub": "Nous sélectionnons, importons et livrons les dispositifs médicaux dont les pharmacies, cliniques et hôpitaux algériens ont besoin : conformes, tracés, disponibles.",
    "hero.meta": "Sidi Bel Abbès — Algérie", "hero.scroll": "Défiler",
    "about.label": "01 — La maison",
    "about.title": "Un maillon <em>fiable</em> de la chaîne de soin.",
    "about.text": "Depuis Sidi Bel Abbès, NASOURAI PHARM relie les meilleurs fabricants internationaux aux professionnels de santé algériens. Chaque référence est choisie pour sa <span class=\"hl\">conformité</span>, chaque lot est <span class=\"hl\">tracé</span>, chaque livraison est <span class=\"hl\">tenue</span>. Parce qu'au bout de la chaîne, il y a toujours un patient.",
    "about.since": "SARL — Importation & distribution",
    "v1.t": "Rigueur", "v1.d": "Chaque fiche technique vérifiée, chaque certificat archivé.",
    "v2.t": "Proximité", "v2.d": "Un interlocuteur commercial dédié, joignable en direct.",
    "v3.t": "Réactivité", "v3.d": "Stock local et préparation des commandes sous 24 h.",
    "cat.label": "02 — Catalogue", "cat.title": "Le catalogue, <em>en un geste</em>.",
    "cat.lead": "Filtrez par famille, ouvrez la fiche, ajoutez à votre demande. Tarifs professionnels communiqués sous 24 h.",
    "cat.filterAria": "Filtrer par catégorie", "cat.all": "Tout",
    "cat.quick": "Aperçu rapide", "cat.add": "Devis", "cat.added": "Ajouté",
    "cat.foot": "Une référence manque ? Nous la sourçons pour vous.", "cat.footCta": "Envoyer ma liste",
    "cat.seeAll": "Voir les {n} références",
    "why.label": "03 — Pourquoi nous", "why.title": "Cinq raisons de nous <em>confier</em> vos achats.",
    "w1.t": "Qualité certifiée", "w1.d": "Fabricants audités, marquage CE et normes ISO vérifiés pour chaque référence avant sa mise en stock.", "w1.s": "100 % des lots tracés",
    "w2.t": "Conformité réglementaire", "w2.d": "Dossiers d'enregistrement, certificats d'origine et fiches techniques fournis sur simple demande.", "w2.s": "Documents sous 24 h",
    "w3.t": "Stock permanent", "w3.d": "Un entrepôt à Sidi Bel Abbès pour éviter les ruptures sur vos références critiques.", "w3.s": "+1 200 références",
    "w4.t": "Livraison maîtrisée", "w4.d": "Préparation sous 24 h et acheminement suivi vers tout l'Ouest algérien, et au-delà.", "w4.s": "48 à 72 h",
    "w5.t": "Accompagnement", "w5.d": "Un commercial dédié pour vos volumes, vos appels d'offres et vos besoins spécifiques.", "w5.s": "1 interlocuteur unique",
    "stats.label": "04 — En chiffres", "stats.title": "Des chiffres qui <em>battent</em> juste.",
    "proc.label": "05 — Méthode", "proc.title": "De la demande <em>au suivi</em>.",
    "proc.lead": "Un circuit court et lisible, pensé pour les acheteurs qui n'ont pas de temps à perdre.",
    "s1.t": "Demande", "s1.d": "Envoyez votre liste par formulaire, WhatsApp ou téléphone.",
    "s2.t": "Devis", "s2.d": "Offre chiffrée et disponibilités confirmées sous 24 h.",
    "s3.t": "Livraison", "s3.d": "Préparation, contrôle et livraison suivie jusqu'à votre établissement.",
    "s4.t": "Suivi", "s4.d": "Réassort, traçabilité des lots et service après-vente.",
    "contact.label": "06 — Contact", "contact.title": "Parlons de votre <em>prochaine</em> commande.",
    "contact.lead": "Une question, un appel d'offres, une rupture à combler ? Notre équipe répond directement.",
    "ph.standard": "Standard", "ph.contact": "Contact", "ph.commercial": "Commercial",
    "contact.addrL": "Adresse", "contact.addr": "72, logement route Tessala, Sidi Bel Abbès, Algérie",
    "contact.map": "Ouvrir l'itinéraire", "contact.mapAria": "Plan stylisé : route Tessala, Sidi Bel Abbès",
    "form.title": "Demande de devis", "form.note": "Votre demande est transmise sur WhatsApp à notre service commercial. Réponse sous 24 h ouvrées.",
    "form.name": "Nom et prénom", "form.org": "Établissement", "form.type": "Type d'établissement",
    "form.t1": "Pharmacie", "form.t2": "Clinique", "form.t3": "Hôpital", "form.t4": "Cabinet médical", "form.t5": "Revendeur",
    "form.phone": "Téléphone", "form.city": "Wilaya / ville", "form.selected": "Produits sélectionnés", "form.empty": "Aucun produit : ajoutez-en depuis le catalogue, ou décrivez votre besoin ci-dessous.",
    "form.msg": "Produits, quantités, précisions", "form.submit": "Envoyer la demande",
    "form.req": "Champ requis", "form.badPhone": "Numéro invalide",
    "form.okT": "Demande prête.", "form.ok": "WhatsApp s'ouvre avec votre message pré-rempli : il ne reste qu'à l'envoyer.", "form.again": "Nouvelle demande",
    "form.remove": "Retirer",
    "modal.close": "Fermer", "modal.specs": "Caractéristiques", "modal.pack": "Conditionnement", "modal.quote": "Demander un devis", "modal.add": "Ajouter au devis", "modal.call": "Appeler le commercial", "modal.fiche": "Fiche complète",
    "foot.tag": "La précision <span class=\"grad-text\">qui soigne.</span>", "foot.nav": "Navigation", "foot.cats": "Catégories", "foot.contact": "Contact",
    "foot.rights": "Tous droits réservés", "foot.top": "Retour en haut ↑", "foot.legal": "Dispositifs médicaux destinés aux professionnels de santé. Lire attentivement la notice.",
    "fab.call": "Appeler le service commercial", "fab.wa": "Écrire sur WhatsApp",
    "toast.added": "ajouté à votre demande de devis", "toast.removed": "retiré de la demande",
    "cur.view": "Voir", "cur.explore": "Explorer", "cur.call": "Appeler", "cur.send": "Envoyer", "cur.open": "Ouvrir",
    "wa.intro": "Bonjour NASOURAI PHARM, je souhaite un devis.", "wa.name": "Nom", "wa.org": "Établissement", "wa.city": "Ville", "wa.phone": "Tél", "wa.products": "Produits", "wa.msg": "Précisions",
    "marquee": ["Consommables", "Diagnostic", "Orthopédie", "Équipement", "Protection", "Pansements", "Stérilisation", "Monitoring"],
    /* catalogue page */
    "lp.label": "Catalogue professionnel", "lp.title1": "Le catalogue", "lp.title2": "<em>complet</em>.",
    "lp.lead": "Huit familles de dispositifs, des références tracées et des tarifs professionnels sous 24 h. Cherchez, filtrez, ajoutez à votre demande de devis.",
    "lp.families": "familles", "lp.refs": "références", "lp.delay": "réponse devis",
    "lp.searchLabel": "Rechercher un produit", "lp.search": "Rechercher : gants, cathéter, oxymètre, NP-DG…",
    "lp.tagsAria": "Filtrer par caractéristique", "lp.results": "références", "lp.reset": "Réinitialiser",
    "lp.empty": "Aucune référence ne correspond à votre recherche.", "lp.emptyCta": "Demandez-la : nous la sourçons pour vous.",
    "tag.sterile": "Stérile", "tag.single": "Usage unique", "tag.stock": "En stock", "tag.hospital": "Hospitalier",
    /* quote bar */
    "qb.one": "produit dans votre devis", "qb.many": "produits dans votre devis", "qb.go": "Finaliser la demande",
    /* product page */
    "f.crumb": "Fil d'Ariane", "f.add": "Ajouter au devis", "f.added": "Dans votre devis", "f.wa": "Demander sur WhatsApp", "f.call": "Appeler le commercial",
    "f.specs": "Caractéristiques", "f.pack": "Conditionnement", "f.ref": "Référence", "f.cat": "Famille",
    "f.note": "Fiche technique, certificats CE et dossier d'enregistrement fournis sur demande.",
    "f.prev": "Précédent", "f.next": "Suivant", "f.back": "Retour au catalogue",
    "f.relatedL": "Même famille", "f.relatedT": "Dans la même <em>famille</em>.",
    "f.missingT": "Référence introuvable.", "f.missingD": "Cette référence n'est pas (encore) au catalogue. Écrivez-nous : nous la cherchons pour vous.",
    "f.waMsg": "Bonjour NASOURAI PHARM, je souhaite un devis pour :"
  },
  ar: {
    skip: "الانتقال إلى المحتوى", "pl.cal": "معايرة الإشارة",
    "nav.aria": "التنقل الرئيسي", "nav.home": "الرئيسية", "nav.about": "من نحن", "nav.catalog": "الكتالوج", "nav.why": "مزايانا", "nav.process": "طريقة العمل", "nav.contact": "اتصل بنا",
    "menu.aria": "فتح القائمة", "menu.close": "إغلاق القائمة",
    "cta.quote": "اطلب عرض سعر", "cta.catalog": "تصفّح الكتالوج",
    "hero.label": "مستورد وموزّع — أجهزة ومستلزمات طبية",
    "hero.l1": "الدقّة", "hero.l2": "التي <em>تُعالج</em>.",
    "hero.sub": "نختار ونستورد ونوصل الأجهزة الطبية التي تحتاجها الصيدليات والعيادات والمستشفيات في الجزائر: مطابقة للمعايير، قابلة للتتبّع، ومتوفّرة دائماً.",
    "hero.meta": "سيدي بلعباس — الجزائر", "hero.scroll": "مرّر للأسفل",
    "about.label": "01 — من نحن",
    "about.title": "حلقة <em>موثوقة</em> في سلسلة العلاج.",
    "about.text": "من سيدي بلعباس، تربط نصوراي فارم أفضل المصنّعين الدوليين بمهنيي الصحة في الجزائر. كل مرجع يُختار <span class=\"hl\">لمطابقته</span> للمعايير، وكل دفعة <span class=\"hl\">قابلة للتتبّع</span>، وكل تسليم يتمّ <span class=\"hl\">في موعده</span>. لأنّ في نهاية السلسلة، هناك دائماً مريض.",
    "about.since": "ش.ذ.م.م — استيراد وتوزيع",
    "v1.t": "الصرامة", "v1.d": "كل بطاقة تقنية مُراجَعة، وكل شهادة محفوظة.",
    "v2.t": "القرب", "v2.d": "مسؤول تجاري مخصّص، يمكن الوصول إليه مباشرة.",
    "v3.t": "سرعة الاستجابة", "v3.d": "مخزون محلي وتحضير الطلبيات خلال 24 ساعة.",
    "cat.label": "02 — الكتالوج", "cat.title": "الكتالوج، <em>بلمسة واحدة</em>.",
    "cat.lead": "صنّف حسب العائلة، افتح البطاقة، وأضف المنتج إلى طلبك. تُرسل الأسعار المهنية خلال 24 ساعة.",
    "cat.filterAria": "التصفية حسب الفئة", "cat.all": "الكل",
    "cat.quick": "نظرة سريعة", "cat.add": "عرض سعر", "cat.added": "تمت الإضافة",
    "cat.foot": "لم تجد مرجعاً؟ نوفّره لك.", "cat.footCta": "أرسل قائمتي",
    "cat.seeAll": "عرض المراجع الـ{n}",
    "why.label": "03 — لماذا نحن", "why.title": "خمسة أسباب <em>لتثقوا</em> بنا في مشترياتكم.",
    "w1.t": "جودة معتمدة", "w1.d": "مصنّعون خاضعون للتدقيق، وعلامة CE ومعايير ISO مُتحقَّق منها لكل مرجع قبل تخزينه.", "w1.s": "100 % من الدفعات متتبَّعة",
    "w2.t": "مطابقة تنظيمية", "w2.d": "ملفات التسجيل وشهادات المنشأ والبطاقات التقنية متوفّرة عند الطلب.", "w2.s": "الوثائق خلال 24 ساعة",
    "w3.t": "مخزون دائم", "w3.d": "مستودع في سيدي بلعباس لتفادي انقطاع مراجعكم الأساسية.", "w3.s": "+1200 مرجع",
    "w4.t": "تسليم مضمون", "w4.d": "تحضير خلال 24 ساعة ونقل متابَع نحو كامل الغرب الجزائري وما بعده.", "w4.s": "من 48 إلى 72 ساعة",
    "w5.t": "مرافقة دائمة", "w5.d": "مسؤول تجاري مخصّص لكمياتكم وصفقاتكم واحتياجاتكم الخاصة.", "w5.s": "مُحاور واحد",
    "stats.label": "04 — بالأرقام", "stats.title": "أرقام <em>تنبض</em> بالدقّة.",
    "proc.label": "05 — طريقة العمل", "proc.title": "من الطلب <em>إلى المتابعة</em>.",
    "proc.lead": "مسار قصير وواضح، مصمَّم للمشترين الذين لا وقت لديهم ليضيّعوه.",
    "s1.t": "الطلب", "s1.d": "أرسل قائمتك عبر النموذج أو واتساب أو الهاتف.",
    "s2.t": "عرض السعر", "s2.d": "عرض مفصّل مع تأكيد التوفّر خلال 24 ساعة.",
    "s3.t": "التسليم", "s3.d": "تحضير ومراقبة وتسليم متابَع حتى مؤسستكم.",
    "s4.t": "المتابعة", "s4.d": "إعادة التموين، تتبّع الدفعات وخدمة ما بعد البيع.",
    "contact.label": "06 — اتصل بنا", "contact.title": "لنتحدّث عن طلبيتكم <em>القادمة</em>.",
    "contact.lead": "سؤال، صفقة عمومية، أو نقص يجب تداركه؟ فريقنا يجيبكم مباشرة.",
    "ph.standard": "الهاتف الثابت", "ph.contact": "الاتصال", "ph.commercial": "المصلحة التجارية",
    "contact.addrL": "العنوان", "contact.addr": "72، سكن طريق تسالة، سيدي بلعباس، الجزائر",
    "contact.map": "افتح المسار", "contact.mapAria": "مخطط مبسّط: طريق تسالة، سيدي بلعباس",
    "form.title": "طلب عرض سعر", "form.note": "يُرسل طلبك عبر واتساب إلى مصلحتنا التجارية. الرد خلال 24 ساعة عمل.",
    "form.name": "الاسم واللقب", "form.org": "المؤسسة", "form.type": "نوع المؤسسة",
    "form.t1": "صيدلية", "form.t2": "عيادة", "form.t3": "مستشفى", "form.t4": "عيادة طبية خاصة", "form.t5": "موزّع",
    "form.phone": "الهاتف", "form.city": "الولاية / المدينة", "form.selected": "المنتجات المختارة", "form.empty": "لا توجد منتجات: أضفها من الكتالوج أو صف احتياجك أدناه.",
    "form.msg": "المنتجات، الكميات، تفاصيل إضافية", "form.submit": "إرسال الطلب",
    "form.req": "حقل مطلوب", "form.badPhone": "رقم غير صالح",
    "form.okT": "الطلب جاهز.", "form.ok": "يُفتح واتساب برسالتك جاهزة: لم يبقَ سوى إرسالها.", "form.again": "طلب جديد",
    "form.remove": "إزالة",
    "modal.close": "إغلاق", "modal.specs": "المواصفات", "modal.pack": "التعبئة", "modal.quote": "اطلب عرض سعر", "modal.add": "أضف إلى الطلب", "modal.call": "اتصل بالمسؤول التجاري", "modal.fiche": "البطاقة الكاملة",
    "foot.tag": "الدقّة <span class=\"grad-text\">التي تُعالج.</span>", "foot.nav": "التنقل", "foot.cats": "الفئات", "foot.contact": "اتصل بنا",
    "foot.rights": "جميع الحقوق محفوظة", "foot.top": "العودة إلى الأعلى ↑", "foot.legal": "أجهزة طبية موجّهة لمهنيي الصحة. يُرجى قراءة النشرة بعناية.",
    "fab.call": "اتصل بالمصلحة التجارية", "fab.wa": "راسلنا عبر واتساب",
    "toast.added": "أُضيف إلى طلب عرض السعر", "toast.removed": "أُزيل من الطلب",
    "cur.view": "عرض", "cur.explore": "استكشف", "cur.call": "اتصل", "cur.send": "إرسال", "cur.open": "فتح",
    "wa.intro": "مرحباً نصوراي فارم، أرغب في الحصول على عرض سعر.", "wa.name": "الاسم", "wa.org": "المؤسسة", "wa.city": "المدينة", "wa.phone": "الهاتف", "wa.products": "المنتجات", "wa.msg": "تفاصيل",
    "marquee": ["مستهلكات", "تشخيص", "تقويم العظام", "تجهيزات", "حماية", "ضمادات", "تعقيم", "مراقبة"],
    "lp.label": "كتالوج مهني", "lp.title1": "الكتالوج", "lp.title2": "<em>الكامل</em>.",
    "lp.lead": "ثماني عائلات من الأجهزة، مراجع قابلة للتتبّع وأسعار مهنية خلال 24 ساعة. ابحث، صنّف، وأضف إلى طلب عرض السعر.",
    "lp.families": "عائلات", "lp.refs": "مرجعاً", "lp.delay": "للرد على الطلب",
    "lp.searchLabel": "ابحث عن منتج", "lp.search": "ابحث: قفازات، قسطرة، مقياس الأكسجين…",
    "lp.tagsAria": "التصفية حسب الخاصية", "lp.results": "مرجعاً", "lp.reset": "إعادة الضبط",
    "lp.empty": "لا يوجد مرجع يطابق بحثك.", "lp.emptyCta": "اطلبه منا: نوفّره لك.",
    "tag.sterile": "معقّم", "tag.single": "استعمال واحد", "tag.stock": "متوفّر", "tag.hospital": "استشفائي",
    "qb.one": "منتج في طلبك", "qb.many": "منتجات في طلبك", "qb.go": "إتمام الطلب",
    "f.crumb": "مسار التصفح", "f.add": "أضف إلى الطلب", "f.added": "في طلبك", "f.wa": "اطلب عبر واتساب", "f.call": "اتصل بالمسؤول التجاري",
    "f.specs": "المواصفات", "f.pack": "التعبئة", "f.ref": "المرجع", "f.cat": "العائلة",
    "f.note": "البطاقة التقنية وشهادات CE وملف التسجيل متوفّرة عند الطلب.",
    "f.prev": "السابق", "f.next": "التالي", "f.back": "العودة إلى الكتالوج",
    "f.relatedL": "من نفس العائلة", "f.relatedT": "من <em>نفس العائلة</em>.",
    "f.missingT": "المرجع غير موجود.", "f.missingD": "هذا المرجع غير متوفّر في الكتالوج حالياً. راسلنا: نبحث عنه من أجلك.",
    "f.waMsg": "مرحباً نصوراي فارم، أرغب في عرض سعر لـ:"
  }
};

/* =============================== HELPERS =============================== */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE = matchMedia("(hover:hover) and (pointer:fine)").matches;
const G = !!window.gsap;
const HAS_ST = G && !!window.ScrollTrigger;
const HAS_FLIP = G && !!window.Flip;
if (G) gsap.registerPlugin(...[window.ScrollTrigger, window.Flip].filter(Boolean));
if (RM || !G) document.documentElement.classList.add("no-anim");

const store = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
};
const params = new URLSearchParams(location.search);
let lang = params.get("lang") || store.get("np-lang") || "fr";
if (!I18N[lang]) lang = "fr";
const t = (k, vars) => {
  let v = I18N[lang][k] ?? I18N.fr[k] ?? k;
  if (vars && typeof v === "string") Object.keys(vars).forEach(n => { v = v.replace(`{${n}}`, vars[n]); });
  return v;
};
const L = o => (o && (o[lang] ?? o.fr)) || "";
const catName = id => L(D.categories.find(c => c.id === id) || {});
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const productHref = p => `produit.html#${encodeURIComponent(p.id)}`;
const catHref = id => `produits.html?cat=${encodeURIComponent(id)}`;
const findProduct = id => D.products.find(p => p.id === id);
const fmt = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

/* ECG path generator */
function ecgD(w, h, n, start = 0) {
  const m = h / 2, seg = w / n;
  let d = `M${start} ${m}`;
  for (let i = 0; i < n; i++) {
    const x = start + i * seg, p = f => (x + seg * f).toFixed(1);
    d += ` L${p(.30)} ${m} Q${p(.34)} ${m - h * .1} ${p(.38)} ${m} L${p(.45)} ${m} L${p(.47)} ${m + h * .1} L${p(.5)} ${m - h * .45} L${p(.53)} ${m + h * .26} L${p(.56)} ${m} L${p(.66)} ${m} Q${p(.73)} ${m - h * .16} ${p(.8)} ${m} L${p(1)} ${m}`;
  }
  return d;
}

/* =============================== PRODUCT ICONS =============================== */
const ICONS = {
  syringe: '<path d="M78 22h44M100 22v44"/><path d="M66 66h68"/><rect x="82" y="66" width="36" height="118" rx="6"/><rect class="f" x="86" y="78" width="28" height="12" rx="2"/><path d="M118 104h-8M118 120h-12M118 136h-8M118 152h-12M118 168h-8"/><path d="M92 184h16l-4 14h-8z"/><path d="M100 198v36"/>',
  catheter: '<path d="M100 18v42"/><path d="M86 60h28l-4 30H90z"/><path d="M58 98c12-10 26-10 42-8 16-2 30-2 42 8-12 10-26 12-42 10-16 2-30 0-42-10z" class="f"/><rect x="88" y="104" width="24" height="44" rx="4"/><path d="M100 148v22c0 20 30 20 30 42v18"/><circle cx="130" cy="236" r="6"/>',
  drip: '<path class="f" d="M68 18h64v72c0 14-14 24-32 24s-32-10-32-24z"/><path d="M68 18h64v72c0 14-14 24-32 24s-32-10-32-24z"/><path d="M84 42h32M84 58h22"/><path d="M100 114v12"/><rect x="88" y="126" width="24" height="34" rx="6"/><path d="M100 140v8" stroke-dasharray="2 6"/><path d="M100 160v80"/><rect x="86" y="186" width="28" height="20" rx="5"/><circle cx="100" cy="196" r="4"/>',
  tensiometer: '<rect x="44" y="84" width="96" height="112" rx="18"/><rect class="f" x="58" y="100" width="68" height="44" rx="6"/><path d="M66 128l8-10 8 6 10-14 8 8 12-4"/><circle cx="92" cy="170" r="11"/><path d="M92 84c0-30 30-40 52-40"/><rect x="138" y="20" width="40" height="66" rx="10"/><path d="M146 36h24M146 48h24M146 60h24"/>',
  oximeter: '<path d="M52 104c0-28 20-44 44-44h8c24 0 44 16 44 44v34c0 26-20 42-44 42h-8c-24 0-44-16-44-42z"/><rect class="f" x="68" y="88" width="64" height="40" rx="7"/><path d="M74 110h12l5-10 7 20 6-14 4 4h14"/><path d="M52 150h96"/><path d="M80 180v44c0 12 40 12 40 0v-44"/><circle cx="100" cy="165" r="4"/>',
  glucometer: '<rect x="62" y="44" width="76" height="140" rx="24"/><rect class="f" x="76" y="62" width="48" height="50" rx="7"/><path d="M86 92l6-12 6 18 6-10h10"/><circle cx="86" cy="140" r="8"/><circle cx="114" cy="140" r="8"/><path d="M90 184v46h20v-46"/><circle cx="100" cy="222" r="3.5"/>',
  thermometer: '<path d="M36 72h104a22 22 0 0 1 22 22v8a22 22 0 0 1-22 22H98l-12 96H56l8-96H36z"/><rect class="f" x="52" y="86" width="58" height="26" rx="5"/><path d="M62 99h10M80 99h20"/><path d="M168 98h22M170 82l14-8M170 114l14 8"/><path d="M70 152h14"/><circle cx="140" cy="98" r="5"/>',
  knee: '<path d="M76 16c-4 62 0 92 4 112 4 30-6 62-8 106M126 16c2 62-2 92-6 112-4 30 4 62 6 106"/><rect class="f" x="66" y="64" width="70" height="22" rx="8"/><rect class="f" x="66" y="152" width="68" height="22" rx="8"/><circle cx="100" cy="120" r="17"/><path d="M66 86v66M136 86v66"/><circle cx="66" cy="120" r="6"/><circle cx="136" cy="120" r="6"/>',
  collar: '<ellipse cx="100" cy="82" rx="64" ry="24"/><path d="M36 82v64c0 14 29 25 64 25s64-11 64-25V82"/><path d="M36 146c0-14 29-25 64-25s64 11 64 25" opacity=".45"/><rect class="f" x="86" y="112" width="28" height="44" rx="5"/><path d="M60 110v40M140 110v40" opacity=".5"/>',
  wrist: '<path d="M72 236V124c0-12-8-30-8-52 0-18 10-32 22-32h28c12 0 22 14 22 32 0 22-8 40-8 52v112"/><rect class="f" x="62" y="118" width="76" height="86" rx="16"/><rect x="62" y="118" width="76" height="86" rx="16"/><path d="M62 140h76M62 162h76M62 184h76" opacity=".55"/><path d="M100 44v74" opacity=".4"/>',
  crutch: '<rect class="f" x="66" y="20" width="68" height="16" rx="8"/><rect x="66" y="20" width="68" height="16" rx="8"/><path d="M78 36l16 124M122 36l-16 124"/><rect x="82" y="96" width="36" height="14" rx="7"/><path d="M100 160v68"/><path d="M88 230h24" stroke-width="7"/><circle cx="100" cy="176" r="3"/><circle cx="100" cy="194" r="3"/><circle cx="100" cy="212" r="3"/>',
  wheelchair: '<circle cx="92" cy="168" r="52"/><circle cx="92" cy="168" r="40" opacity=".4"/><circle cx="92" cy="168" r="6"/><circle cx="162" cy="210" r="12"/><path d="M58 44h-14M58 44v82h68l26 46v26"/><path d="M68 102h62v-30"/><path d="M126 126l36 0"/><path class="f" d="M64 104h60v20H64z"/>',
  nebulizer: '<rect x="30" y="132" width="96" height="74" rx="16"/><circle cx="62" cy="169" r="14"/><path d="M90 152h22M90 169h22M90 186h22"/><path d="M126 168c34 0 36-46 24-78"/><path class="f" d="M136 90l10-34h16l8 34z"/><path d="M140 56c-14-12-8-34 14-36 22 2 28 24 14 36"/>',
  bed: '<path d="M22 168h156"/><path d="M28 168v42M172 168v42"/><circle cx="28" cy="220" r="9"/><circle cx="172" cy="220" r="9"/><path d="M28 86v82M172 112v56"/><path class="f" d="M34 150h52l22-26h60v44H34z"/><path d="M34 150h52l22-26h60"/><path d="M60 134h44M120 136h44" opacity=".5"/><path d="M178 190l14 8" />',
  couch: '<path class="f" d="M28 118h112l30-42 12 9-26 55H28z"/><path d="M28 118h112l30-42 12 9-26 55H28z"/><path d="M48 140v82M150 140v82M38 222h124"/><path d="M60 170h80" opacity=".5"/><circle cx="36" cy="100" r="12"/>',
  pole: '<path d="M100 36v174"/><path d="M56 36h88"/><path d="M60 36c0 10-8 12-8 20M140 36c0 10 8 12 8 20M84 36v14M116 36v14"/><path class="f" d="M118 58h30v42c0 8-6 12-15 12s-15-4-15-12z"/><path d="M133 112v30" opacity=".5"/><rect x="93" y="128" width="14" height="18" rx="3"/><path d="M100 210l-52 18M100 210l52 18M100 210l-28 26M100 210l28 26"/><circle cx="48" cy="232" r="5"/><circle cx="152" cy="232" r="5"/><circle cx="72" cy="240" r="4"/><circle cx="128" cy="240" r="4"/>',
  gloves: '<path d="M66 230v-80l-18-40c-5-11 9-18 15-9l15 22V58c0-11 15-11 15 0v54V46c0-11 15-11 15 0v66V54c0-11 15-11 15 0v58V70c0-11 15-11 15 0v96c0 30-12 42-14 64"/><path class="f" d="M66 196h70v34H66z"/>',
  mask: '<path class="f" d="M46 86c34-14 74-14 108 0v70c-34 20-74 20-108 0z"/><path d="M46 86c34-14 74-14 108 0v70c-34 20-74 20-108 0z"/><path d="M46 110c34-9 74-9 108 0M46 132c34-9 74-9 108 0"/><path d="M46 92c-28-6-34 56 0 58M154 92c28-6 34 56 0 58"/><path d="M84 82h32" stroke-width="5"/>',
  gown: '<path d="M70 28h60l42 42-22 24-12-12v142H62V82L50 94 28 70z"/><path class="f" d="M84 28c6 16 26 16 32 0"/><path d="M62 124h76" opacity=".55"/><path d="M100 46v178" opacity=".35" stroke-dasharray="4 8"/>',
  bottle: '<path d="M84 22h34v18H84z"/><path d="M118 28h28v14"/><path d="M92 40v18M110 40v18"/><rect x="62" y="58" width="78" height="174" rx="14"/><rect class="f" x="74" y="108" width="54" height="74" rx="6"/><path d="M101 122c-10 14-13 22-13 28a13 13 0 0 0 26 0c0-6-3-14-13-28z"/>',
  gauze: '<rect x="42" y="56" width="116" height="138" rx="10"/><rect class="f" x="56" y="70" width="88" height="110" rx="4"/><path d="M71 70v110M86 70v110M100 70v110M114 70v110M129 70v110M56 86h88M56 104h88M56 122h88M56 140h88M56 158h88" opacity=".45"/><path d="M42 56l18-22h80l18 22"/>',
  bandage: '<g transform="rotate(-32 100 125)"><rect x="24" y="90" width="152" height="70" rx="35"/><rect class="f" x="72" y="102" width="56" height="46" rx="9"/><circle cx="46" cy="114" r="2.5"/><circle cx="46" cy="136" r="2.5"/><circle cx="154" cy="114" r="2.5"/><circle cx="154" cy="136" r="2.5"/></g>',
  roll: '<ellipse cx="74" cy="110" rx="34" ry="54"/><ellipse class="f" cx="74" cy="110" rx="12" ry="20"/><path d="M74 56h62M74 164h62"/><path d="M136 56c19 0 34 24 34 54s-15 54-34 54"/><path class="f" d="M140 164l28 70h-56l-6-70z"/><path d="M118 186h40M124 206h40" opacity=".5"/>',
  o2mask: '<path d="M62 70c0-32 76-32 76 0l10 58c0 26-20 40-48 40s-48-14-48-40z"/><circle class="f" cx="100" cy="112" r="16"/><circle cx="100" cy="112" r="16"/><path d="M62 92c-26 0-32 30-18 40M138 92c26 0 32 30 18 40"/><path d="M100 168v12"/><path class="f" d="M76 180h48l8 46H68z"/><path d="M76 180h48l8 46H68z"/><path d="M132 210c20 0 30 10 40 26"/>',
  cannula: '<path d="M38 236V146c0-52 28-94 62-94s62 42 62 94v90"/><path d="M58 112c20 18 64 18 84 0"/><path d="M90 116v-18M110 116v-18" stroke-width="6"/><circle class="f" cx="100" cy="122" r="10"/><path d="M38 236h124" opacity=".4"/>',
  tubes: '<rect class="f" x="46" y="46" width="32" height="24" rx="4"/><rect x="50" y="70" width="24" height="146" rx="12"/><rect class="f" x="54" y="140" width="16" height="70" rx="8"/><rect class="f" x="84" y="36" width="32" height="24" rx="4"/><rect x="88" y="60" width="24" height="156" rx="12"/><rect class="f" x="92" y="120" width="16" height="90" rx="8"/><rect class="f" x="122" y="52" width="32" height="24" rx="4"/><rect x="126" y="76" width="24" height="140" rx="12"/><rect class="f" x="130" y="160" width="16" height="50" rx="8"/><path d="M40 216h120"/>',
  pot: '<rect class="f" x="60" y="56" width="80" height="28" rx="6"/><rect x="60" y="56" width="80" height="28" rx="6"/><path d="M70 66h60" opacity=".4"/><path d="M64 84h72l-6 128a10 10 0 0 1-10 10H80a10 10 0 0 1-10-10z"/><rect x="78" y="118" width="44" height="42" rx="4"/><path d="M86 132h28M86 146h18"/><path d="M72 188h56" opacity=".4"/>',
  slides: '<g transform="rotate(-12 100 125)"><rect x="38" y="58" width="124" height="44" rx="4"/><rect class="f" x="38" y="58" width="32" height="44"/></g><g transform="rotate(5 100 125)"><rect x="38" y="122" width="124" height="44" rx="4"/><rect class="f" x="38" y="122" width="32" height="44"/></g><rect x="78" y="184" width="46" height="46" rx="3" opacity=".7"/><circle cx="116" cy="144" r="6"/>'
};
const media = p => p.img
  ? `<img src="${esc(p.img)}" alt="${esc(L(p.name))}" loading="lazy" decoding="async">`
  : `<span class="ph"><svg viewBox="0 0 200 250" role="img" aria-label="${esc(L(p.name))}">${ICONS[p.icon] || ICONS.syringe}</svg></span>`;

/* =============================== STATE =============================== */
const quote = new Set((() => { try { return JSON.parse(store.get("np-quote") || "[]"); } catch (e) { return []; } })().filter(id => findProduct(id)));
const saveQuote = () => store.set("np-quote", JSON.stringify([...quote]));
let currentFilter = "all";
const activeTags = new Set();
let query = "";
if (PAGE === "produits") {
  const c = params.get("cat");
  if (c && D.categories.some(x => x.id === c)) currentFilter = c;
  query = (params.get("q") || "").trim();
}
const listProducts = () => PAGE === "home" ? D.products.filter(p => p.home) : D.products;
const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
function matches(p) {
  if (currentFilter !== "all" && p.cat !== currentFilter) return false;
  for (const tg of activeTags) if (!(p.tags || []).includes(tg)) return false;
  if (query) {
    const hay = norm([p.ref, p.name.fr, p.name.ar, p.desc.fr, p.desc.ar, catName(p.cat)].join(" "));
    if (!norm(query).split(/\s+/).every(w => hay.includes(w))) return false;
  }
  return true;
}

/* =============================== RENDERERS =============================== */
function renderFilters() {
  const box = $("#filters"); if (!box) return;
  $$(".filter", box).forEach(b => b.remove());
  const list = listProducts();
  const cats = D.categories.filter(c => list.some(p => p.cat === c.id));
  const items = [{ id: "all", label: t("cat.all"), n: list.length },
    ...cats.map(c => ({ id: c.id, label: L(c), n: list.filter(p => p.cat === c.id).length }))];
  box.insertAdjacentHTML("beforeend", items.map(i =>
    `<button type="button" class="filter" data-filter="${i.id}" aria-pressed="${i.id === currentFilter}">${esc(i.label)}<sup>${String(i.n).padStart(2, "0")}</sup></button>`).join(""));
  requestAnimationFrame(() => moveIndicator(false));
}
function moveIndicator(animate = true) {
  const act = $(`.filter[aria-pressed="true"]`), ind = $(".filters__ind");
  if (!act || !ind) return;
  const props = { x: act.offsetLeft, width: act.offsetWidth };
  if (G && animate && !RM) gsap.to(ind, { ...props, duration: .6, ease: "expo.out" });
  else if (G) gsap.set(ind, props);
  else { ind.style.transform = `translateX(${props.x}px)`; ind.style.width = props.width + "px"; }
}
const addLabel = (id, long) => quote.has(id)
  ? "✓ " + t(long ? "f.added" : "cat.added")
  : (long ? t("f.add") : "+ " + t("cat.add"));

function cardHTML(p) {
  const added = quote.has(p.id);
  return `<article class="p-card${p.featured ? " is-featured" : ""}" data-id="${p.id}" data-cat="${p.cat}">
    <div class="p-tilt">
      <span class="p-glare" aria-hidden="true"></span>
      <button type="button" class="p-media" data-quick="${p.id}" data-cursor="view" aria-label="${esc(t("cat.quick"))} : ${esc(L(p.name))}">
        <span class="p-media__in">${media(p)}</span>
        <span class="p-tag mono">${esc(catName(p.cat))}</span>
        <span class="p-ref mono">${esc(p.ref)}</span>
      </button>
      <div class="p-body">
        <h3 class="p-name"><a href="${productHref(p)}" data-cursor="open">${esc(L(p.name))}</a></h3>
        <p class="p-desc">${esc(L(p.desc))}</p>
        <div class="p-actions">
          <button type="button" class="chip-btn" data-quick="${p.id}">${esc(t("cat.quick"))}</button>
          <button type="button" class="add-btn" data-add="${p.id}" aria-pressed="${added}">${esc(addLabel(p.id))}</button>
        </div>
      </div>
    </div>
  </article>`;
}
function renderProducts() {
  const grid = $("#grid"); if (!grid) return;
  grid.innerHTML = listProducts().map(cardHTML).join("");
  applyFilterVisibility();
  initTilt(grid);
}
function applyFilterVisibility() {
  let n = 0;
  $$("#grid .p-card").forEach(c => { const ok = matches(findProduct(c.dataset.id)); c.hidden = !ok; if (ok) n++; });
  const rc = $("#resultCount"); if (rc) rc.textContent = String(n).padStart(2, "0");
  const em = $("#empty"); if (em) em.hidden = n > 0;
  const rs = $("#resetFilters"); if (rs) rs.hidden = currentFilter === "all" && !activeTags.size && !query;
}
function renderStats() {
  const row = $("#statsRow"); if (!row) return;
  row.innerHTML = D.stats.map(s => `
    <div class="stat">
      <div class="stat__num"><span data-count="${s.value}">${RM || !G ? fmt(s.value) : "0"}</span><sup>${esc(s.suffix)}</sup></div>
      <span class="stat__label mono">${esc(L(s))}</span>
    </div>`).join("");
}
function renderMarquee() {
  if (!$("#mqA")) return;
  const words = t("marquee");
  const star = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" fill="url(#gradStroke)"/></svg>';
  const row = arr => arr.map(w => `<span class="marquee__item">${esc(w)}${star}</span>`).join("");
  const a = row(words), b = row([...words].reverse());
  $("#mqA").innerHTML = a + a + a;
  $("#mqB").innerHTML = b + b + b;
}
function renderFooterCats() {
  const ul = $("#footCats"); if (!ul) return;
  ul.innerHTML = D.categories.map(c => `<li><a href="${catHref(c.id)}">${esc(L(c))}</a></li>`).join("");
}
function renderCounts() {
  $$("[data-total-refs]").forEach(el => el.textContent = String(D.products.length).padStart(2, "0"));
  $$("[data-total-cats]").forEach(el => el.textContent = String(D.categories.length).padStart(2, "0"));
  $$("[data-see-all]").forEach(el => el.textContent = t("cat.seeAll", { n: D.products.length }));
}
function renderQuoteUI() {
  $$("[data-quote-count]").forEach(b => { b.textContent = quote.size; b.hidden = quote.size === 0; });
  const box = $("#quoteChips");
  if (box) {
    box.dataset.empty = t("form.empty");
    box.innerHTML = [...quote].map(id => {
      const p = findProduct(id);
      return `<span class="qchip">${esc(L(p.name))}<button type="button" data-remove="${id}" aria-label="${esc(t("form.remove"))} ${esc(L(p.name))}">×</button></span>`;
    }).join("");
  }
  const bar = $("#qbar");
  if (bar) {
    const on = quote.size > 0;
    $("#qbarTxt").textContent = t(quote.size > 1 ? "qb.many" : "qb.one");
    if (on && bar.hidden) { bar.hidden = false; if (G && !RM) gsap.fromTo(bar, { y: 120, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "expo.out" }); }
    else if (!on && !bar.hidden) { if (G && !RM) gsap.to(bar, { y: 120, opacity: 0, duration: .4, ease: "power2.in", onComplete: () => { bar.hidden = true; } }); else bar.hidden = true; }
  }
}

/* =============================== PRODUCT PAGE =============================== */
function currentProductId() {
  return decodeURIComponent((location.hash || "").slice(1)) || params.get("id") || "";
}
function renderFiche() {
  const mount = $("#ficheMount"); if (!mount) return;
  const p = findProduct(currentProductId());
  const missing = $("#ficheEmpty"), related = $("#related");
  if (!p) {
    mount.innerHTML = ""; missing.hidden = false; related.hidden = true;
    document.title = (lang === "ar" ? "مرجع غير موجود" : "Référence introuvable") + " — NASOURAI PHARM";
    return;
  }
  missing.hidden = true;
  const all = D.products, i = all.indexOf(p);
  const prev = all[(i - 1 + all.length) % all.length], next = all[(i + 1) % all.length];
  const specs = (p.specs[lang] || p.specs.fr).map(s => {
    const k = s.indexOf(":");
    return k > 0 ? `<div><dt>${esc(s.slice(0, k).trim())}</dt><dd>${esc(s.slice(k + 1).trim())}</dd></div>` : `<div><dd>${esc(s)}</dd></div>`;
  }).join("");
  const tags = (p.tags || []).map(tg => `<span class="tag-chip mono">${esc(t("tag." + tg))}</span>`).join("");
  const waText = encodeURIComponent(`${t("f.waMsg")} ${L(p.name)} (${p.ref})`);
  mount.innerHTML = `
    <nav class="crumb mono" aria-label="${esc(t("f.crumb"))}" data-hero-fade>
      <a href="index.html">${esc(t("nav.home"))}</a><span aria-hidden="true">/</span>
      <a href="produits.html">${esc(t("nav.catalog"))}</a><span aria-hidden="true">/</span>
      <a href="${catHref(p.cat)}">${esc(catName(p.cat))}</a><span aria-hidden="true">/</span>
      <span aria-current="page">${esc(p.ref)}</span>
    </nav>
    <div class="fiche">
      <div class="fiche__visual">
        <div class="fiche__media" id="ficheMedia">
          <svg class="fiche__ring" viewBox="0 0 400 500" aria-hidden="true"><circle cx="200" cy="250" r="170" fill="none" stroke="rgba(45,245,192,.25)" stroke-dasharray="2 10"/><circle cx="200" cy="250" r="130" fill="none" stroke="rgba(61,184,255,.18)"/></svg>
          <div class="fiche__media-in">${media(p)}</div>
          <span class="p-tag mono">${esc(catName(p.cat))}</span>
          <span class="p-ref mono">${esc(p.ref)}</span>
          <svg class="fiche__ecg" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path d="${ecgD(400, 60, 2)}"/></svg>
        </div>
      </div>
      <div class="fiche__info">
        <span class="label label--dot" data-hero-fade>${esc(catName(p.cat))}</span>
        <h1 class="fiche__name" data-reveal="title">${esc(L(p.name))}</h1>
        <p class="fiche__ref mono" data-hero-fade>${esc(t("f.ref"))} — <b>${esc(p.ref)}</b></p>
        <p class="lead" data-hero-fade>${esc(L(p.desc))}</p>
        ${tags ? `<div class="fiche__tags" data-hero-fade>${tags}</div>` : ""}
        <div class="fiche__block" data-hero-fade><span class="mono">${esc(t("f.specs"))}</span><dl class="specs">${specs}</dl></div>
        <div class="fiche__block" data-hero-fade><span class="mono">${esc(t("f.pack"))}</span><p class="fiche__pack">${esc(L(p.pack))}</p></div>
        <div class="fiche__actions" data-hero-fade>
          <button type="button" class="btn btn--primary" data-add="${p.id}" data-add-long aria-pressed="${quote.has(p.id)}" data-magnetic><span class="btn__fill"></span><span class="btn__in" data-add-label>${esc(addLabel(p.id, true))}</span></button>
          <a class="btn" href="https://wa.me/${D.contacts.whatsapp}?text=${waText}" target="_blank" rel="noopener" data-magnetic><span class="btn__fill"></span><span class="btn__in">${esc(t("f.wa"))}</span></a>
          <a class="btn" href="tel:${D.contacts.commercial.tel}" data-magnetic data-cursor="call"><span class="btn__fill"></span><span class="btn__in">${esc(t("f.call"))}</span></a>
        </div>
        <p class="fiche__note" data-hero-fade>${esc(t("f.note"))}</p>
      </div>
    </div>
    <nav class="fiche__nav" aria-label="${esc(t("nav.catalog"))}">
      <a href="${productHref(prev)}" class="fiche__navlink" data-cursor="open"><span class="mono">← ${esc(t("f.prev"))}</span><strong>${esc(L(prev.name))}</strong></a>
      <a href="${productHref(next)}" class="fiche__navlink fiche__navlink--next" data-cursor="open"><span class="mono">${esc(t("f.next"))} →</span><strong>${esc(L(next.name))}</strong></a>
    </nav>`;
  document.title = `${L(p.name)} — NASOURAI PHARM`;
  // related
  const rel = D.products.filter(x => x.cat === p.cat && x.id !== p.id);
  const fill = rel.length >= 3 ? rel : rel.concat(D.products.filter(x => x.cat !== p.cat && x.id !== p.id).slice(0, 3 - rel.length));
  related.hidden = false;
  $("#relatedGrid").innerHTML = fill.slice(0, 4).map(cardHTML).join("");
  initTilt($("#relatedGrid")); initTilt(mount, "#ficheMedia"); initMagnetic(mount);
}

/* =============================== SPLITTING =============================== */
function splitInto(el, makeUnit) {
  const out = document.createDocumentFragment();
  const walk = (src, dest) => {
    Array.from(src.childNodes).forEach(n => {
      if (n.nodeType === 3) {
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { dest.appendChild(document.createTextNode(" ")); return; }
          dest.appendChild(makeUnit(part));
        });
      } else if (n.nodeType === 1) { const c = n.cloneNode(false); dest.appendChild(c); walk(n, c); }
    });
  };
  walk(el, out); el.innerHTML = ""; el.appendChild(out);
}
function splitWords(el) {
  if (el.dataset.split) return;
  splitInto(el, part => { const w = document.createElement("span"); w.className = "w"; const i = document.createElement("span"); i.className = "wi"; i.textContent = part; w.appendChild(i); return w; });
  el.dataset.split = "1";
}
/* Arabic letters must stay joined → split by words; Latin → by letters */
function splitChars(el) {
  const byWord = lang === "ar";
  splitInto(el, part => {
    const w = document.createElement("span"); w.className = "word";
    if (byWord) { const c = document.createElement("span"); c.className = "ch"; c.textContent = part; w.appendChild(c); }
    else [...part].forEach(ch => { const c = document.createElement("span"); c.className = "ch"; c.textContent = ch; w.appendChild(c); });
    return w;
  });
}
function splitRevealWords(el) {
  splitInto(el, part => { const s = document.createElement("span"); s.className = "rw"; s.textContent = part; return s; });
}

/* =============================== LANGUAGE =============================== */
function applyTexts() {
  const html = document.documentElement;
  html.lang = lang; html.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { const v = t(el.dataset.i18n); if (typeof v === "string") el.textContent = v; delete el.dataset.split; });
  $$("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); delete el.dataset.split; });
  $$("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  $$("[data-i18n-ph]").forEach(el => el.setAttribute("placeholder", t(el.dataset.i18nPh)));
  $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  if (PAGE === "home") document.title = lang === "ar" ? "نصوراي فارم — الدقّة التي تُعالج" : "NASOURAI PHARM — La précision qui soigne";
  if (PAGE === "produits") document.title = lang === "ar" ? "الكتالوج — نصوراي فارم" : "Catalogue — NASOURAI PHARM";
  const ml = $("#mapLink"); if (ml) ml.href = D.contacts.mapsUrl;
}
function renderAll() {
  renderFilters(); renderProducts(); renderStats(); renderMarquee(); renderFooterCats(); renderCounts(); renderFiche(); renderQuoteUI();
}
let booted = false;
function setLang(l) {
  if (l === lang && booted) return;
  lang = l; store.set("np-lang", l);
  applyTexts(); renderAll();
  if (!booted) return;
  splitHero(); revealHero(true);
  initReveals();
  if (HAS_ST) ScrollTrigger.refresh();
  if (G && !RM) gsap.fromTo("main", { opacity: .35 }, { opacity: 1, duration: .5, ease: "power2.out" });
}
$$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

/* =============================== LENIS + SCROLL =============================== */
let lenis = null;
function initLenis() {
  if (RM || !window.Lenis) return;
  lenis = new Lenis({ duration: 1.15, easing: x => Math.min(1, 1.001 - Math.pow(2, -10 * x)), smoothWheel: true });
  if (HAS_ST) lenis.on("scroll", ScrollTrigger.update);
  if (G) { gsap.ticker.add(time => lenis.raf(time * 1000)); gsap.ticker.lagSmoothing(0); }
  else { const raf = time => { lenis.raf(time); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
}
function scrollToTarget(target, immediate = false) {
  const el = typeof target === "string" ? $(target) : target;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: el.id === "top" ? 0 : -60, duration: 1.4, immediate });
  else el.scrollIntoView({ behavior: RM || immediate ? "auto" : "smooth" });
}
document.addEventListener("click", e => {
  const a = e.target.closest("a[data-scroll]");
  if (!a) return;
  const href = a.getAttribute("href");
  if (!href || !href.startsWith("#") || !$(href)) return;
  e.preventDefault();
  closeMenu();
  scrollToTarget(href);
});

/* header hide/show, progress, active link */
function initHeader() {
  const header = $("#header"), bar = $(".progress");
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
    header.classList.toggle("is-scrolled", y > 40);
    const menuOpen = document.body.classList.contains("menu-open");
    if (!menuOpen && y > 160 && y > lastY + 2) header.classList.add("is-hidden");
    else if (menuOpen || y < 160 || y < lastY - 2) header.classList.remove("is-hidden");
    lastY = y;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  if (!HAS_ST) return;
  ["about", "catalogue", "why", "process", "contact"].forEach(id => {
    if (!$("#" + id) || PAGE !== "home") return;
    ScrollTrigger.create({ trigger: "#" + id, start: "top 50%", end: "bottom 50%",
      onToggle: s => $$(`.nav a[data-nav="${id}"]`).forEach(a => a.classList.toggle("is-active", s.isActive)) });
  });
  if ($("#process")) ScrollTrigger.create({ trigger: "#process", start: "top 60%", end: "bottom 40%",
    onToggle: s => $(".cursor").classList.toggle("on-paper", s.isActive) });
}

/* =============================== CURSOR =============================== */
function initCursor() {
  if (!FINE || RM || !G) return;
  document.documentElement.classList.add("has-cursor");
  const cur = $(".cursor"), dot = $(".cursor__dot"), ring = $(".cursor__ring"), label = $(".cursor__label");
  const pos = { x: innerWidth / 2, y: innerHeight / 2 }, rp = { ...pos };
  const dx = gsap.quickSetter(dot, "x", "px"), dy = gsap.quickSetter(dot, "y", "px");
  const rx = gsap.quickSetter(ring, "x", "px"), ry = gsap.quickSetter(ring, "y", "px");
  addEventListener("pointermove", e => { pos.x = e.clientX; pos.y = e.clientY; dx(pos.x); dy(pos.y); }, { passive: true });
  gsap.ticker.add(() => {
    const k = 1 - Math.pow(1 - .16, gsap.ticker.deltaRatio());
    rp.x += (pos.x - rp.x) * k; rp.y += (pos.y - rp.y) * k; rx(rp.x); ry(rp.y);
  });
  document.addEventListener("pointerover", e => {
    const el = e.target.closest("a,button,[data-cursor],input,select,textarea,label");
    cur.classList.toggle("is-hover", !!el);
    const c = el && el.closest("[data-cursor]");
    cur.classList.toggle("is-label", !!c);
    if (c) label.textContent = t("cur." + c.dataset.cursor);
  });
  document.addEventListener("pointerleave", () => gsap.to(cur, { opacity: 0, duration: .2 }));
  document.addEventListener("pointerenter", () => gsap.to(cur, { opacity: 1, duration: .2 }));
}

/* =============================== MAGNETIC + FILL =============================== */
document.addEventListener("pointerenter", e => {
  const b = e.target.closest && e.target.closest(".btn");
  if (!b || e.target !== b) return;
  const r = b.getBoundingClientRect();
  b.style.setProperty("--fx", ((e.clientX - r.left) / r.width * 100) + "%");
  b.style.setProperty("--fy", ((e.clientY - r.top) / r.height * 100) + "%");
}, true);
function initMagnetic(root = document) {
  if (!FINE || RM || !G) return;
  $$("[data-magnetic]:not([data-mag])", root).forEach(el => {
    el.dataset.mag = "1";
    const inner = el.querySelector(".btn__in") || el;
    el.addEventListener("pointermove", e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      gsap.to(el, { x: x * .3, y: y * .4, duration: .6, ease: "power3.out" });
      gsap.to(inner, { x: x * .12, y: y * .15, duration: .6, ease: "power3.out" });
    });
    el.addEventListener("pointerleave", e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--fx", ((e.clientX - r.left) / r.width * 100) + "%");
      el.style.setProperty("--fy", ((e.clientY - r.top) / r.height * 100) + "%");
      gsap.to([el, inner], { x: 0, y: 0, duration: 1, ease: "elastic.out(1,.35)" });
    });
  });
}

/* =============================== TILT =============================== */
function initTilt(root, selector = ".p-card") {
  if (!FINE || RM || !G || !root) return;
  $$(selector, root.matches && root.matches(selector) ? root.parentNode : root).forEach(card => {
    if (card.dataset.tilt) return; card.dataset.tilt = "1";
    const tilt = card.querySelector(".p-tilt") || card;
    gsap.set(tilt, { transformPerspective: 1000 });
    const rX = gsap.quickTo(tilt, "rotationX", { duration: .6, ease: "power3.out" });
    const rY = gsap.quickTo(tilt, "rotationY", { duration: .6, ease: "power3.out" });
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      const k = Math.min(1, 380 / r.width);
      rY((px - .5) * 14 * k); rX((.5 - py) * 12 * k);
      tilt.style.setProperty("--gx", px * 100 + "%"); tilt.style.setProperty("--gy", py * 100 + "%");
    });
    card.addEventListener("pointerleave", () => { rX(0); rY(0); });
  });
}

/* =============================== CATALOG =============================== */
function refilter() {
  const cards = $$("#grid .p-card");
  if (HAS_FLIP && !RM && cards.length) {
    const state = Flip.getState(cards);
    applyFilterVisibility();
    Flip.from(state, {
      duration: .75, ease: "expo.inOut", scale: true, absolute: true, stagger: .02,
      onEnter: els => gsap.fromTo(els, { opacity: 0, scale: .82, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: .7, ease: "expo.out", stagger: .04, delay: .15 }),
      onLeave: els => gsap.to(els, { opacity: 0, scale: .82, duration: .4, ease: "power2.in" }),
      onComplete: () => HAS_ST && ScrollTrigger.refresh()
    });
  } else { applyFilterVisibility(); if (HAS_ST) ScrollTrigger.refresh(); }
  if (PAGE === "produits") {
    const u = new URL(location.href);
    currentFilter === "all" ? u.searchParams.delete("cat") : u.searchParams.set("cat", currentFilter);
    query ? u.searchParams.set("q", query) : u.searchParams.delete("q");
    history.replaceState(null, "", u);
  }
}
function setFilter(id) {
  if (id === currentFilter) return;
  currentFilter = id;
  $$(".filter").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.filter === id)));
  moveIndicator(true);
  refilter();
}
function toggleQuote(id, forceAdd = false) {
  const p = findProduct(id); if (!p) return;
  const had = quote.has(id);
  if (had && !forceAdd) quote.delete(id); else quote.add(id);
  saveQuote();
  $$(`[data-add="${id}"]`).forEach(b => {
    const on = quote.has(id), long = b.hasAttribute("data-add-long");
    b.setAttribute("aria-pressed", String(on));
    (b.querySelector("[data-add-label]") || b).textContent = addLabel(id, long);
    if (G && !RM) gsap.fromTo(b, { scale: .88 }, { scale: 1, duration: .6, ease: "elastic.out(1,.4)" });
  });
  renderQuoteUI();
  toast(`${L(p.name)} — ${t(!had || forceAdd ? "toast.added" : "toast.removed")}`);
  if (G && !RM) $$("[data-quote-count]").forEach(bd => gsap.fromTo(bd, { scale: 1.6 }, { scale: 1, duration: .5, ease: "back.out(3)" }));
}
function initCatalogEvents() {
  const fl = $("#filters");
  if (fl) fl.addEventListener("click", e => { const b = e.target.closest(".filter"); if (b) setFilter(b.dataset.filter); });
  document.addEventListener("click", e => {
    const q = e.target.closest("[data-quick]"); if (q) { openModal(q.dataset.quick, q); return; }
    const a = e.target.closest("[data-add]"); if (a) { toggleQuote(a.dataset.add); return; }
    const r = e.target.closest("[data-remove]"); if (r) toggleQuote(r.dataset.remove);
  });
  // search + tags (catalogue page)
  const search = $("#search");
  if (search) {
    search.value = query;
    let tm;
    search.addEventListener("input", () => { clearTimeout(tm); tm = setTimeout(() => { query = search.value.trim(); refilter(); }, 160); });
  }
  $$("[data-tag]").forEach(b => b.addEventListener("click", () => {
    const tg = b.dataset.tag;
    activeTags.has(tg) ? activeTags.delete(tg) : activeTags.add(tg);
    b.setAttribute("aria-pressed", String(activeTags.has(tg)));
    refilter();
  }));
  const reset = $("#resetFilters");
  if (reset) reset.addEventListener("click", () => {
    activeTags.clear(); $$("[data-tag]").forEach(b => b.setAttribute("aria-pressed", "false"));
    query = ""; if (search) search.value = "";
    currentFilter = "__"; setFilter("all");
  });
  addEventListener("resize", () => moveIndicator(false));
}

/* =============================== MODAL =============================== */
let modalProduct = null, lastFocus = null;
function openModal(id, opener) {
  const p = findProduct(id), m = $("#modal"); if (!p || !m) return;
  modalProduct = p; lastFocus = opener || document.activeElement;
  $("#mMedia").innerHTML = media(p);
  $("#mCat").textContent = catName(p.cat);
  $("#mName").textContent = L(p.name);
  $("#mRef").textContent = "REF. " + p.ref;
  $("#mDesc").textContent = L(p.desc);
  $("#mSpecs").innerHTML = (p.specs[lang] || p.specs.fr).map(s => `<li>${esc(s)}</li>`).join("");
  $("#mPack").textContent = L(p.pack);
  $("#mQuoteTxt").textContent = t(PAGE === "home" ? "modal.quote" : "modal.add");
  const fiche = $("#mFiche"); if (fiche) fiche.href = productHref(p);
  m.classList.add("is-open"); m.setAttribute("aria-hidden", "false");
  lenis && lenis.stop();
  if (G && !RM) {
    gsap.timeline()
      .fromTo(".modal__bg", { opacity: 0 }, { opacity: 1, duration: .4 })
      .fromTo("#modalPanel", { clipPath: "inset(100% 0% 0% 0% round 28px)", y: 60 }, { clipPath: "inset(0% 0% 0% 0% round 28px)", y: 0, duration: .9, ease: "expo.out" }, 0)
      .fromTo($$("#mMedia .ph svg, #mMedia img"), { scale: .6, rotate: -12, opacity: 0 }, { scale: 1, rotate: 0, opacity: 1, duration: 1, ease: "expo.out" }, .2)
      .fromTo(".modal__body > *", { y: 24, opacity: 0 }, { y: 0, opacity: 1, stagger: .05, duration: .6, ease: "power3.out" }, .25);
  }
  setTimeout(() => $(".modal__close").focus(), 50);
}
function closeModal() {
  const m = $("#modal"); if (!m || !m.classList.contains("is-open")) return;
  const done = () => { m.classList.remove("is-open"); m.setAttribute("aria-hidden", "true"); lenis && lenis.start(); lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true }); };
  if (G && !RM) gsap.timeline({ onComplete: done })
    .to("#modalPanel", { clipPath: "inset(0% 0% 100% 0% round 28px)", y: -30, duration: .55, ease: "expo.in" })
    .to(".modal__bg", { opacity: 0, duration: .3 }, .25);
  else done();
}
function initModal() {
  const m = $("#modal");
  if (m) {
    m.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });
    $("#mQuote").addEventListener("click", () => {
      if (modalProduct) toggleQuote(modalProduct.id, true);
      closeModal();
      if (PAGE === "home") setTimeout(() => scrollToTarget("#contact"), 450);
    });
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeModal(); closeMenu(); }
    if (e.key === "Tab" && m && m.classList.contains("is-open")) {
      const f = $$("button,a[href],input,select,textarea", m).filter(x => x.offsetParent !== null);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

/* =============================== TOAST =============================== */
let toastTimer;
function toast(msg) {
  const el = $("#toast"); if (!el) return;
  $("#toastTxt").textContent = msg;
  el.classList.add("is-on"); clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-on"), 2600);
}

/* =============================== MENU =============================== */
const menuOrigin = () => lang === "ar" ? "46px 40px" : "calc(100% - 46px) 40px";
function openMenu() {
  const m = $("#menu"), b = $("#burger");
  document.body.classList.add("menu-open"); b.setAttribute("aria-expanded", "true"); b.setAttribute("aria-label", t("menu.close"));
  m.setAttribute("aria-hidden", "false"); m.style.visibility = "visible"; lenis && lenis.stop();
  $("#header").classList.remove("is-hidden");
  if (G && !RM) {
    gsap.timeline()
      .fromTo(m, { clipPath: `circle(0% at ${menuOrigin()})` }, { clipPath: `circle(150% at ${menuOrigin()})`, duration: .9, ease: "expo.inOut" })
      .fromTo(".menu__links a .t, .menu__links a .mono", { yPercent: 110 }, { yPercent: 0, stagger: .04, duration: .8, ease: "expo.out" }, .35)
      .fromTo(".menu__foot", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: .6 }, .6);
  } else m.style.clipPath = "none";
  setTimeout(() => $(".menu__links a").focus(), 100);
}
function closeMenu() {
  if (!document.body.classList.contains("menu-open")) return;
  const m = $("#menu"), b = $("#burger");
  document.body.classList.remove("menu-open"); b.setAttribute("aria-expanded", "false"); b.setAttribute("aria-label", t("menu.aria"));
  m.setAttribute("aria-hidden", "true"); lenis && lenis.start();
  const hide = () => { m.style.visibility = "hidden"; };
  if (G && !RM) gsap.to(m, { clipPath: `circle(0% at ${menuOrigin()})`, duration: .7, ease: "expo.inOut", onComplete: hide });
  else { m.style.clipPath = ""; hide(); }
}
function initMenu() {
  const b = $("#burger"); if (!b) return;
  b.addEventListener("click", () => document.body.classList.contains("menu-open") ? closeMenu() : openMenu());
}

/* =============================== SPOTLIGHT =============================== */
function initSpotlight() {
  const grid = $("#whyGrid"); if (!grid) return;
  const cards = $$(".spot", grid);
  const set = (x, y) => cards.forEach(c => {
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", (x - r.left) + "px"); c.style.setProperty("--my", (y - r.top) + "px");
  });
  grid.addEventListener("pointermove", e => set(e.clientX, e.clientY));
  grid.addEventListener("pointerdown", e => set(e.clientX, e.clientY)); // tap on mobile
  grid.addEventListener("pointerleave", () => cards.forEach(c => { c.style.setProperty("--mx", "-999px"); c.style.setProperty("--my", "-999px"); }));
}

/* =============================== MARQUEE =============================== */
function initMarquee() {
  const rows = $$(".marquee__row").map(el => ({ el, track: el.firstElementChild, x: 0, dir: +el.dataset.dir }));
  if (RM || !rows.length) return;
  let lastY = scrollY, vel = 0, sign = 1;
  const tick = () => {
    const dy = scrollY - lastY; lastY = scrollY;
    vel += (dy - vel) * .12;
    if (Math.abs(vel) > .5) sign = vel > 0 ? 1 : -1;
    const speed = (.9 + Math.min(Math.abs(vel) * .5, 14)) * sign;
    rows.forEach(r => {
      const third = r.track.scrollWidth / 3;
      if (!third) return;
      r.x -= speed * r.dir;
      if (r.x <= -third) r.x += third;
      if (r.x > 0) r.x -= third;
      r.track.style.transform = `translate3d(${r.x}px,0,0) skewX(${Math.max(-12, Math.min(12, -vel * .35))}deg)`;
    });
  };
  if (G) gsap.ticker.add(tick); else { const f = () => { tick(); requestAnimationFrame(f); }; requestAnimationFrame(f); }
}

/* =============================== ECG LINES =============================== */
function initECG() {
  const pulse = $("#heroEcgPulse");
  if (pulse) {
    const d = ecgD(1440, 200, 4);
    $("#heroEcgBase").setAttribute("d", d); pulse.setAttribute("d", d);
    const len = pulse.getTotalLength(), dash = 260;
    pulse.style.strokeDasharray = `${dash} ${len}`;
    pulse.style.strokeDashoffset = dash;
    if (G && !RM) gsap.fromTo(pulse, { strokeDashoffset: dash }, { strokeDashoffset: -len, duration: 4.4, ease: "none", repeat: -1 });
    else pulse.style.strokeDashoffset = -len / 2;
  }
  const se = $("#statsEcg"); if (se) se.setAttribute("d", ecgD(1440, 220, 3));
  const pl = $("#plPath"); if (pl) pl.setAttribute("d", ecgD(560, 90, 3));
  if ($("#procBase")) {
    let pd = "M0 70";
    [125, 375, 625, 875].forEach(c => { pd += ` L${c - 46} 70 L${c - 34} 82 L${c - 16} 8 L${c} 132 L${c + 14} 70`; });
    pd += " L1000 70";
    $("#procBase").setAttribute("d", pd); $("#procDraw").setAttribute("d", pd);
  }
}

/* =============================== THREE.JS HERO =============================== */
function heartbeat(time) {
  const ph = (time % 1.0) / 1.0;
  return Math.exp(-Math.pow((ph - .08) / .035, 2)) + .55 * Math.exp(-Math.pow((ph - .26) / .04, 2));
}
function initHero3D() {
  const canvas = $("#heroCanvas");
  if (!canvas || !window.THREE) return;
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: "high-performance" }); }
  catch (e) { return; }
  const mobile = innerWidth < 768;
  renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 1.75));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, 1, .1, 100);
  camera.position.set(0, 0, 10);
  const group = new THREE.Group(); scene.add(group);
  group.rotation.z = -.32;

  const STRAND = mobile ? 520 : 1100, RUNGS = mobile ? 34 : 64, RUNG_PTS = 9, AMB = mobile ? 700 : 1600;
  const total = STRAND * 2 + RUNGS * RUNG_PTS + AMB;
  const pos = new Float32Array(total * 3), base = new Float32Array(total * 3), off = new Float32Array(total * 3);
  const col = new Float32Array(total * 3), size = new Float32Array(total), phase = new Float32Array(total);
  const mint = new THREE.Color("#2DF5C0"), cyan = new THREE.Color("#3DB8FF"), coral = new THREE.Color("#FF5C5C"), paper = new THREE.Color("#F4F8F7");
  const LEN = 22, R = 1.45, TURNS = 3.2;
  let k = 0;
  const put = (x, y, z, c, s) => { base[k * 3] = x; base[k * 3 + 1] = y; base[k * 3 + 2] = z; col[k * 3] = c.r; col[k * 3 + 1] = c.g; col[k * 3 + 2] = c.b; size[k] = s; phase[k] = Math.random() * 6.28; k++; };
  const helix = (tt, s) => { const a = tt * Math.PI * 2 * TURNS + s * Math.PI; return [(tt - .5) * LEN, Math.cos(a) * R, Math.sin(a) * R]; };
  for (let s = 0; s < 2; s++) for (let i = 0; i < STRAND; i++) {
    const tt = i / STRAND, [x, y, z] = helix(tt, s), j = .06;
    put(x + (Math.random() - .5) * j, y + (Math.random() - .5) * j, z + (Math.random() - .5) * j, mint.clone().lerp(cyan, tt), 1 + Math.random() * .8);
  }
  for (let r = 0; r < RUNGS; r++) {
    const tt = (r + .5) / RUNGS, a = helix(tt, 0), b = helix(tt, 1);
    for (let q = 1; q <= RUNG_PTS; q++) { const f = q / (RUNG_PTS + 1); put(a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f, paper.clone().lerp(mint, .5), .7); }
  }
  for (let i = 0; i < AMB; i++) {
    const c = Math.random() < .05 ? coral : (Math.random() < .5 ? mint : cyan);
    put((Math.random() - .5) * 30, (Math.random() - .5) * 16, (Math.random() - .5) * 12 - 2, c, .35 + Math.random() * .9);
  }
  pos.set(base);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
  geo.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
  geo.setAttribute("aPhase", new THREE.BufferAttribute(phase, 1));
  const mat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uPulse: { value: 0 }, uPR: { value: renderer.getPixelRatio() }, uSize: { value: mobile ? 30 : 38 } },
    vertexShader: `
      attribute vec3 aColor; attribute float aSize; attribute float aPhase;
      uniform float uTime, uPulse, uPR, uSize;
      varying vec3 vColor; varying float vA;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position,1.0);
        float tw = .75 + .25*sin(uTime*1.6 + aPhase);
        gl_PointSize = aSize * uSize * uPR * (1.0 + uPulse*.55) * tw / -mv.z;
        gl_Position = projectionMatrix * mv;
        vColor = aColor; vA = clamp(1.2 - (-mv.z-6.0)*.07, .15, 1.0);
      }`,
    fragmentShader: `
      varying vec3 vColor; varying float vA;
      void main(){
        float d = length(gl_PointCoord - .5);
        float a = smoothstep(.5, .0, d); a *= a;
        gl_FragColor = vec4(vColor * (1.0 + a*.6), a * vA);
      }`
  });
  group.add(new THREE.Points(geo, mat));

  const mouse = { x: 0, y: 0, tx: 0, ty: 0, active: false };
  const hero = $(".hero");
  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    mouse.tx = ((e.clientX - r.left) / r.width) * 2 - 1; mouse.ty = -(((e.clientY - r.top) / r.height) * 2 - 1); mouse.active = true;
  }, { passive: true });
  hero.addEventListener("pointerleave", () => { mouse.active = false; });

  const resize = () => {
    const w = hero.clientWidth, h = hero.clientHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    camera.position.z = w < 768 ? 13 : 10;
    group.position.set(w < 768 ? 0 : 1.2, w < 768 ? 1.6 : .5, 0);
  };
  resize(); addEventListener("resize", resize);

  const v3 = new THREE.Vector3(), dir = new THREE.Vector3(), local = new THREE.Vector3();
  let visible = true;
  const start = performance.now();
  if ("IntersectionObserver" in window) new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(hero);

  const bpmEl = $("#bpm"), bpmVal = $("#bpmVal"); let lastBeat = -1;
  const frame = () => {
    const time = (performance.now() - start) / 1000;
    if (!RM) {
      group.rotation.x = time * .22;
      mouse.x += (mouse.tx - mouse.x) * .06; mouse.y += (mouse.ty - mouse.y) * .06;
      camera.position.x = mouse.x * .9; camera.position.y = mouse.y * .6; camera.lookAt(0, 0, 0);
      mat.uniforms.uPulse.value = heartbeat(time); mat.uniforms.uTime.value = time;
      const bi = Math.floor(time);
      if (bpmEl && bi !== lastBeat) { lastBeat = bi; bpmEl.classList.remove("beat"); void bpmEl.offsetWidth; bpmEl.classList.add("beat"); bpmVal.textContent = String(70 + Math.round(Math.random() * 4)).padStart(3, "0"); }
      // mouse → world → helix local space
      camera.updateMatrixWorld();
      v3.set(mouse.x, mouse.y, .5).unproject(camera); dir.copy(v3).sub(camera.position).normalize();
      const dist = -camera.position.z / dir.z; local.copy(camera.position).addScaledVector(dir, dist);
      group.updateMatrixWorld(); group.worldToLocal(local);
      const RAD = 2.4, active = mouse.active;
      for (let i = 0; i < total; i++) {
        const i3 = i * 3;
        let tx = 0, ty = 0, tz = 0;
        if (active) {
          const dx = base[i3] - local.x, dy = base[i3 + 1] - local.y, dz = base[i3 + 2] - local.z;
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 < RAD * RAD) { const d = Math.sqrt(d2) + .0001, f = Math.pow(1 - d / RAD, 2) * 1.6; tx = dx / d * f; ty = dy / d * f; tz = dz / d * f; }
        }
        off[i3] += (tx - off[i3]) * .08; off[i3 + 1] += (ty - off[i3 + 1]) * .08; off[i3 + 2] += (tz - off[i3 + 2]) * .08;
        pos[i3] = base[i3] + off[i3]; pos[i3 + 1] = base[i3 + 1] + off[i3 + 1]; pos[i3 + 2] = base[i3 + 2] + off[i3 + 2];
      }
      geo.attributes.position.needsUpdate = true;
    }
    renderer.render(scene, camera);
  };
  if (RM) { group.rotation.x = .6; frame(); return; }
  const loop = () => { if (visible && !document.hidden) frame(); requestAnimationFrame(loop); };
  requestAnimationFrame(loop);
  if (HAS_ST) gsap.to(canvas, { opacity: .25, yPercent: 18, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
}

/* =============================== HERO INTRO =============================== */
function splitHero() { $$(".hero__title .line").forEach(splitChars); }
function revealHero(quick = false) {
  if (!G || RM) return;
  const chars = $$(".hero__title .ch");
  if (chars.length) gsap.fromTo(chars, { yPercent: 115, rotate: lang === "ar" ? 0 : 7, opacity: 0 },
    { yPercent: 0, rotate: 0, opacity: 1, duration: quick ? .8 : 1.3, ease: "expo.out", stagger: quick ? .015 : (lang === "ar" ? .09 : .032) });
  if (quick) return;
  const fades = $$("[data-hero-fade]");
  if (fades.length) gsap.fromTo(fades, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: .07, delay: .35 });
  if ($(".hero__ecg")) gsap.fromTo(".hero__ecg", { opacity: 0, scaleX: .4 }, { opacity: 1, scaleX: 1, duration: 1.6, ease: "expo.out", delay: .2 });
  if ($("#heroCanvas")) gsap.fromTo("#heroCanvas", { opacity: 0, scale: 1.15 }, { opacity: 1, scale: 1, duration: 2.2, ease: "expo.out" });
  const fm = $("#ficheMedia");
  if (fm) gsap.fromTo(fm, { clipPath: "inset(100% 0% 0% 0% round 28px)" }, { clipPath: "inset(0% 0% 0% 0% round 28px)", duration: 1.3, ease: "expo.inOut" });
}

/* =============================== SCROLL REVEALS =============================== */
let revealCtx = null;
function initReveals() {
  if (revealCtx) revealCtx.revert();
  if (!HAS_ST || RM) { $$("[data-count]").forEach(el => el.textContent = fmt(+el.dataset.count)); $$(".step").forEach(s => s.classList.add("is-on")); return; }
  revealCtx = gsap.context(() => {
    $$('[data-reveal="title"]').forEach(el => {
      splitWords(el);
      gsap.fromTo($$(".wi", el), { yPercent: 115, rotate: lang === "ar" ? 0 : 4 }, { yPercent: 0, rotate: 0, duration: 1.2, ease: "expo.out", stagger: .06,
        scrollTrigger: { trigger: el, start: "top 85%" } });
    });
    $$('[data-reveal="up"]').forEach(el => gsap.fromTo(el, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 88%" } }));
    $$('[data-reveal="stagger"]').forEach(el => gsap.fromTo(el.children, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: "expo.out", stagger: .1, scrollTrigger: { trigger: el, start: "top 85%" } }));
    $$('[data-reveal="words"]').forEach(el => {
      splitRevealWords(el);
      gsap.fromTo($$(".rw", el), { opacity: .14 }, { opacity: 1, ease: "none", stagger: .1, scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true } });
    });
    $$("[data-parallax]").forEach(el => gsap.to(el, { yPercent: +el.dataset.parallax * 100, ease: "none", scrollTrigger: { trigger: el.closest("section"), start: "top bottom", end: "bottom top", scrub: true } }));
    if ($("#orbSvg")) gsap.to("#orbSvg", { rotate: 180, ease: "none", scrollTrigger: { trigger: "#about", start: "top bottom", end: "bottom top", scrub: true } });
    if ($(".fiche__ring")) gsap.to(".fiche__ring", { rotate: 120, ease: "none", scrollTrigger: { trigger: ".fiche", start: "top top", end: "bottom top", scrub: true } });
    // product cards
    const cards = $$(".p-card");
    if (cards.length) {
      gsap.set(cards, { opacity: 0 });
      ScrollTrigger.batch(cards, { start: "top 94%", once: true,
        onEnter: b => gsap.fromTo(b, { y: 70, opacity: 0, rotateX: -12 }, { y: 0, opacity: 1, rotateX: 0, duration: 1.1, ease: "expo.out", stagger: .08, overwrite: true }) });
    }
    // counters
    $$("[data-count]").forEach(el => {
      const o = { v: 0 }, end = +el.dataset.count;
      ScrollTrigger.create({ trigger: el, start: "top 90%", once: true,
        onEnter: () => gsap.to(o, { v: end, duration: 2.4, ease: "power3.out", onUpdate: () => el.textContent = fmt(o.v) }) });
    });
    if ($("#statsRow")) gsap.fromTo(".stat", { y: 60, opacity: 0 }, { y: 0, opacity: 1, stagger: .12, duration: 1.1, ease: "expo.out", scrollTrigger: { trigger: "#statsRow", start: "top 85%" } });
    const se = $("#statsEcg");
    if (se) { const sl = se.getTotalLength(); gsap.fromTo(se, { strokeDasharray: sl, strokeDashoffset: sl }, { strokeDashoffset: 0, ease: "none", scrollTrigger: { trigger: "#stats", start: "top 80%", end: "bottom 40%", scrub: true } }); }
    // process line
    const pdw = $("#procDraw");
    if (pdw) {
      const pl = pdw.getTotalLength(), steps = $$(".step");
      gsap.set(pdw, { strokeDasharray: pl, strokeDashoffset: pl });
      const mobileProc = matchMedia("(max-width:860px)").matches;
      ScrollTrigger.create({ trigger: "#procTrack", start: mobileProc ? "top 70%" : "top 75%", end: mobileProc ? "bottom 60%" : "bottom 55%", scrub: .6,
        onUpdate: s => {
          const p = s.progress;
          pdw.style.strokeDashoffset = pl * (1 - p);
          const vl = $(".process__vline i"); if (vl) vl.style.transform = `scaleY(${p})`;
          steps.forEach((st, i) => st.classList.toggle("is-on", p >= (mobileProc ? i / 4 : (i + .35) / 4)));
        } });
      gsap.fromTo(".step", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: .12, duration: 1, ease: "expo.out", scrollTrigger: { trigger: "#procTrack", start: "top 80%" } });
      gsap.fromTo(".process", { clipPath: "inset(6% 3% 0% 3% round 40px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", ease: "none", scrollTrigger: { trigger: ".process", start: "top bottom", end: "top 25%", scrub: true } });
    }
    // footer giant
    $$(".footer__giant [data-split-chars]").forEach((row, r) => {
      const chars = $$(".ch", row);
      chars.forEach((c, i) => { c.style.backgroundPosition = `${(i / Math.max(1, chars.length - 1)) * 100}% 0`; });
      gsap.fromTo(chars, { yPercent: 105 }, { yPercent: 0, ease: "expo.out", duration: 1.2, stagger: { each: .04, from: r ? "end" : "start" }, scrollTrigger: { trigger: ".footer__giant", start: "top 98%" } });
    });
  });
}

/* =============================== FORM =============================== */
function initForm() {
  const f = $("#quoteForm"); if (!f) return;
  const F = n => f.elements.namedItem(n);
  const err = (input, msg) => { const fld = input.closest(".field"); fld.classList.toggle("is-error", !!msg); fld.querySelector(".field__err").textContent = msg || ""; };
  f.addEventListener("submit", e => {
    e.preventDefault();
    const name = F("name").value.trim(), phone = F("phone").value.trim(), digits = phone.replace(/\D/g, "");
    let ok = true;
    if (!name) { err(F("name"), t("form.req")); ok = false; } else err(F("name"));
    if (!phone) { err(F("phone"), t("form.req")); ok = false; }
    else if (digits.length < 9 || digits.length > 13) { err(F("phone"), t("form.badPhone")); ok = false; } else err(F("phone"));
    if (!ok) {
      if (G && !RM) gsap.fromTo(f, { x: -10 }, { x: 0, duration: .6, ease: "elastic.out(1,.3)" });
      (f.querySelector(".is-error input") || F("name")).focus();
      return;
    }
    const type = F("type").options[F("type").selectedIndex].text;
    const prods = [...quote].map(id => { const p = findProduct(id); return `• ${L(p.name)} (${p.ref})`; }).join("\n");
    const lines = [t("wa.intro"), "",
      `${t("wa.name")} : ${name}`,
      `${t("wa.org")} : ${[F("org").value.trim(), type].filter(Boolean).join(" — ")}`,
      F("city").value.trim() ? `${t("wa.city")} : ${F("city").value.trim()}` : "",
      `${t("wa.phone")} : ${phone}`,
      prods ? `\n${t("wa.products")} :\n${prods}` : "",
      F("msg").value.trim() ? `\n${t("wa.msg")} :\n${F("msg").value.trim()}` : ""].filter(Boolean).join("\n");
    window.open(`https://wa.me/${D.contacts.whatsapp}?text=${encodeURIComponent(lines)}`, "_blank", "noopener");
    const s = $("#formSuccess"); s.classList.add("is-on");
    if (G && !RM) {
      const c = s.querySelector("circle"), p = s.querySelector("path");
      const cl = c.getTotalLength(), pl = p.getTotalLength();
      gsap.timeline()
        .fromTo(s, { clipPath: "circle(0% at 50% 100%)" }, { clipPath: "circle(150% at 50% 100%)", duration: .9, ease: "expo.inOut" })
        .fromTo(c, { strokeDasharray: cl, strokeDashoffset: cl }, { strokeDashoffset: 0, duration: .8, ease: "power2.inOut" }, .4)
        .fromTo(p, { strokeDasharray: pl, strokeDashoffset: pl }, { strokeDashoffset: 0, duration: .5, ease: "power2.out" }, .95)
        .fromTo($$("h3,p,button", s), { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: .08, duration: .6 }, .9);
    }
    $("#formReset").focus();
  });
  $("#formReset").addEventListener("click", () => {
    f.reset(); quote.clear(); saveQuote(); renderQuoteUI();
    $$("[data-add]").forEach(b => { b.setAttribute("aria-pressed", "false"); (b.querySelector("[data-add-label]") || b).textContent = addLabel(b.dataset.add, b.hasAttribute("data-add-long")); });
    $("#formSuccess").classList.remove("is-on"); F("name").focus();
  });
  ["name", "phone"].forEach(n => F(n).addEventListener("input", () => err(F(n))));
}

/* =============================== PRELOADER =============================== */
function preloader(done) {
  const pl = $("#preloader");
  let seen = false; try { seen = sessionStorage.getItem("np-seen") === "1"; sessionStorage.setItem("np-seen", "1"); } catch (e) {}
  if (!pl) { done(); return; }
  if (!G || RM || seen || location.hash) { pl.style.display = "none"; done(); return; }
  lenis && lenis.stop();
  const count = $("#plCount"), path = $("#plPath"), len = path.getTotalLength(), o = { v: 0 };
  gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  let finished = false;
  const finish = () => {
    if (finished) return; finished = true;
    gsap.timeline({ onComplete: () => { pl.style.display = "none"; lenis && lenis.start(); HAS_ST && ScrollTrigger.refresh(); } })
      .to(".preloader__inner", { y: -40, opacity: 0, duration: .5, ease: "power2.in" })
      .to(pl, { clipPath: "inset(0% 0% 100% 0%)", duration: 1.05, ease: "expo.inOut" }, .25)
      .add(done, .55);
  };
  gsap.timeline({ onComplete: finish })
    .fromTo(".preloader__logo", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .6, ease: "expo.out" })
    .to(o, { v: 100, duration: 2.1, ease: "power2.inOut", onUpdate: () => count.textContent = String(Math.round(o.v)).padStart(3, "0") }, .1)
    .to(path, { strokeDashoffset: 0, duration: 2.1, ease: "power2.inOut" }, .1);
  setTimeout(finish, 6000); // safety
}

/* =============================== BOOT =============================== */
const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();
setLang(lang);
$$(".footer__giant [data-split-chars]").forEach(el => {
  el.innerHTML = [...el.textContent].map(c => `<span class="ch" aria-hidden="true">${c}</span>`).join("");
});
initLenis();
initECG();
splitHero();
if (G && !RM) {
  const pre = $$(".hero__title .ch, [data-hero-fade]");
  if (pre.length) gsap.set(pre, { opacity: 0 });
}
initHeader(); initCursor(); initMagnetic(); initCatalogEvents(); initModal(); initMenu(); initSpotlight(); initMarquee(); initForm();
initHero3D();
if (PAGE === "produit") addEventListener("hashchange", () => {
  if (lenis) lenis.scrollTo(0, { immediate: true }); else scrollTo(0, 0);
  renderFiche(); revealHero(); initReveals();
  if (HAS_ST) ScrollTrigger.refresh();
});
booted = true;
const start = () => {
  revealHero(); initReveals(); moveIndicator(false);
  if (HAS_ST) ScrollTrigger.refresh();
  if (PAGE === "home" && location.hash && $(location.hash)) setTimeout(() => scrollToTarget(location.hash, true), 60);
};
(document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => preloader(start));
})();
