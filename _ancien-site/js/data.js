/* =====================================================================
   DONNÉES ÉDITABLES — partagées par index.html, produits.html et produit.html.
   • Image produit : renseignez `img: "images/mon-produit.png"` (ratio 4:5, fond détouré).
     Laissé vide → placeholder vectoriel.
   • `icon` : syringe | catheter | drip | tensiometer | oximeter | glucometer | thermometer
              knee | collar | wrist | crutch | wheelchair | nebulizer | bed | couch | pole
              gloves | mask | gown | bottle | gauze | bandage | roll | o2mask | cannula
              tubes | pot | slides
   • `tags`  : sterile | single | stock | hospital   (filtres de la page catalogue)
   • `home: true`     → affiché dans le catalogue de la page d'accueil.
   • `featured: true` → carte large sur ordinateur.
   • Lien direct vers une fiche : produit.html#<id>   (ex. produit.html#p03)
   ===================================================================== */
window.NP_DATA = {
  contacts: {
    standard:   { display: "040 70 80 57",   tel: "+21340708057" },
    contact:    { display: "0563 02 27 80",  tel: "+213563022780" },
    commercial: { display: "0563 02 27 81",  tel: "+213563022781" },
    whatsapp: "213563022781",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Route+Tessala+Sidi+Bel+Abbes+Algerie"
  },

  categories: [
    { id: "consommables", fr: "Consommables",        ar: "المستهلكات" },
    { id: "diagnostic",   fr: "Diagnostic",          ar: "التشخيص" },
    { id: "orthopedie",   fr: "Orthopédie",          ar: "تقويم العظام" },
    { id: "equipement",   fr: "Équipement",          ar: "التجهيزات" },
    { id: "protection",   fr: "Protection",          ar: "الحماية" },
    { id: "soins",        fr: "Soins & pansements",  ar: "العناية والضمادات" },
    { id: "respiratoire", fr: "Respiratoire",        ar: "الأجهزة التنفسية" },
    { id: "laboratoire",  fr: "Laboratoire",         ar: "المخبر" }
  ],

  products: [
    /* ---------- Consommables ---------- */
    { id: "p01", cat: "consommables", ref: "NP-CS-010", icon: "syringe", img: "", home: true, featured: true,
      tags: ["sterile", "single", "stock", "hospital"],
      name: { fr: "Seringue 3 parties Luer Lock", ar: "حقنة ثلاثية الأجزاء لوير لوك" },
      desc: { fr: "Stérile, usage unique, de 2 à 20 ml, aiguille montée ou séparée.", ar: "معقّمة وللاستعمال الواحد، من 2 إلى 20 مل، بإبرة مركّبة أو منفصلة." },
      specs:{ fr: ["Volumes : 2 / 5 / 10 / 20 ml", "Stérilisation : oxyde d'éthylène", "Norme : ISO 7886-1"],
              ar: ["السعات: 2 / 5 / 10 / 20 مل", "التعقيم: أكسيد الإيثيلين", "المعيار: ISO 7886-1"] },
      pack: { fr: "Boîte de 100 unités", ar: "علبة من 100 وحدة" } },

    { id: "p02", cat: "consommables", ref: "NP-CS-024", icon: "catheter", img: "", home: true,
      tags: ["sterile", "single", "stock", "hospital"],
      name: { fr: "Cathéter IV sécurisé", ar: "قسطرة وريدية آمنة" },
      desc: { fr: "Calibres 14G à 24G, code couleur, valve anti-reflux.", ar: "مقاسات من 14G إلى 24G، ترميز لوني، صمام مانع للارتداد." },
      specs:{ fr: ["Calibres : 14G à 24G", "Matériau : FEP radio-opaque", "Norme : ISO 10555-5"],
              ar: ["المقاسات: من 14G إلى 24G", "المادة: FEP ظاهرة بالأشعة", "المعيار: ISO 10555-5"] },
      pack: { fr: "Boîte de 50 unités", ar: "علبة من 50 وحدة" } },

    { id: "p14", cat: "consommables", ref: "NP-CS-031", icon: "drip", img: "",
      tags: ["sterile", "single", "hospital"],
      name: { fr: "Perfuseur à régulateur de débit", ar: "جهاز تسريب بمنظّم التدفق" },
      desc: { fr: "Molette de précision, chambre compte-gouttes, filtre 15 µm.", ar: "عجلة ضبط دقيقة، حجرة تنقيط، ومرشّح 15 ميكرون." },
      specs:{ fr: ["Longueur : 150 cm", "Filtre : 15 µm", "Norme : ISO 8536-4"],
              ar: ["الطول: 150 سم", "المرشّح: 15 ميكرون", "المعيار: ISO 8536-4"] },
      pack: { fr: "Sachet unitaire pelable", ar: "كيس فردي سهل الفتح" } },

    /* ---------- Diagnostic ---------- */
    { id: "p03", cat: "diagnostic", ref: "NP-DG-102", icon: "tensiometer", img: "", home: true, featured: true,
      tags: ["stock"],
      name: { fr: "Tensiomètre électronique bras", ar: "جهاز قياس الضغط الإلكتروني للذراع" },
      desc: { fr: "Mesure oscillométrique, détection d'arythmie, mémoire 2 × 120.", ar: "قياس بالتذبذب، كشف اضطراب نظم القلب، ذاكرة 2 × 120." },
      specs:{ fr: ["Plage : 0–299 mmHg", "Précision : ±3 mmHg", "Validation clinique : ESH-IP2"],
              ar: ["المجال: 0–299 ملم زئبق", "الدقة: ±3 ملم زئبق", "المصادقة السريرية: ESH-IP2"] },
      pack: { fr: "Appareil + brassard 22–42 cm", ar: "جهاز + كُمّ 22–42 سم" } },

    { id: "p04", cat: "diagnostic", ref: "NP-DG-115", icon: "oximeter", img: "", home: true,
      tags: ["stock"],
      name: { fr: "Oxymètre de pouls", ar: "مقياس التأكسج النبضي" },
      desc: { fr: "SpO₂ et fréquence cardiaque, écran OLED, alerte de seuil.", ar: "تشبّع الأكسجين ونبض القلب، شاشة OLED، تنبيه عند تجاوز العتبة." },
      specs:{ fr: ["SpO₂ : 70–100 %", "Fréquence : 25–250 bpm", "Autonomie : 30 h"],
              ar: ["تشبّع الأكسجين: 70–100 %", "النبض: 25–250 نبضة/د", "الاستقلالية: 30 ساعة"] },
      pack: { fr: "Appareil + étui", ar: "جهاز + حافظة" } },

    { id: "p05", cat: "diagnostic", ref: "NP-DG-130", icon: "glucometer", img: "", home: true,
      tags: ["stock"],
      name: { fr: "Lecteur de glycémie", ar: "جهاز قياس السكر في الدم" },
      desc: { fr: "Résultat en 5 s, 0,6 µl de sang, bandelettes compatibles.", ar: "النتيجة في 5 ثوانٍ، 0.6 ميكرولتر من الدم، شرائط متوافقة." },
      specs:{ fr: ["Plage : 20–600 mg/dl", "Mémoire : 500 mesures", "Norme : ISO 15197:2013"],
              ar: ["المجال: 20–600 ملغ/دل", "الذاكرة: 500 قياس", "المعيار: ISO 15197:2013"] },
      pack: { fr: "Kit complet + 50 bandelettes", ar: "طقم كامل + 50 شريطاً" } },

    { id: "p15", cat: "diagnostic", ref: "NP-DG-141", icon: "thermometer", img: "",
      tags: ["stock", "hospital"],
      name: { fr: "Thermomètre infrarouge sans contact", ar: "ميزان حرارة بالأشعة تحت الحمراء" },
      desc: { fr: "Mesure frontale en 1 s, alarme de fièvre, mode surface.", ar: "قياس من الجبهة في ثانية واحدة، إنذار الحمّى، وضع قياس الأسطح." },
      specs:{ fr: ["Plage : 32–42,9 °C", "Précision : ±0,2 °C", "Mémoire : 32 mesures"],
              ar: ["المجال: 32–42.9 °م", "الدقة: ±0.2 °م", "الذاكرة: 32 قياساً"] },
      pack: { fr: "Appareil + 2 piles AAA", ar: "جهاز + بطاريتان AAA" } },

    /* ---------- Orthopédie ---------- */
    { id: "p06", cat: "orthopedie", ref: "NP-OR-201", icon: "knee", img: "", home: true,
      tags: ["stock"],
      name: { fr: "Genouillère ligamentaire articulée", ar: "ركبية مفصلية لدعم الأربطة" },
      desc: { fr: "Montants latéraux, rotule ouverte, tailles S à XXL.", ar: "دعامات جانبية، رضفة مفتوحة، مقاسات من S إلى XXL." },
      specs:{ fr: ["Textile : néoprène respirant", "Articulation : polycentrique", "Tailles : S à XXL"],
              ar: ["النسيج: نيوبرين قابل للتهوية", "المفصل: متعدد المراكز", "المقاسات: من S إلى XXL"] },
      pack: { fr: "À l'unité", ar: "بالوحدة" } },

    { id: "p07", cat: "orthopedie", ref: "NP-OR-214", icon: "collar", img: "", home: true,
      tags: ["stock"],
      name: { fr: "Collier cervical C2", ar: "طوق عنقي C2" },
      desc: { fr: "Mousse haute densité, maintien semi-rigide, housse lavable.", ar: "إسفنج عالي الكثافة، تثبيت شبه صلب، غطاء قابل للغسل." },
      specs:{ fr: ["Hauteurs : 7,5 / 9 / 11 cm", "Matière : mousse PU", "Indication : post-traumatique"],
              ar: ["الارتفاعات: 7.5 / 9 / 11 سم", "المادة: إسفنج بولي يوريثان", "الاستعمال: بعد الإصابات"] },
      pack: { fr: "À l'unité", ar: "بالوحدة" } },

    { id: "p21", cat: "orthopedie", ref: "NP-OR-222", icon: "wrist", img: "",
      tags: [],
      name: { fr: "Attelle de poignet", ar: "جبيرة المعصم" },
      desc: { fr: "Baleine palmaire amovible, tissu respirant, gauche ou droite.", ar: "دعامة راحية قابلة للنزع، نسيج يسمح بالتهوية، يسار أو يمين." },
      specs:{ fr: ["Tailles : S / M / L", "Côté : gauche ou droit", "Fermeture : velcro"],
              ar: ["المقاسات: S / M / L", "الجهة: يسار أو يمين", "الإغلاق: فيلكرو"] },
      pack: { fr: "À l'unité", ar: "بالوحدة" } },

    { id: "p22", cat: "orthopedie", ref: "NP-OR-230", icon: "crutch", img: "",
      tags: ["stock"],
      name: { fr: "Béquilles réglables aluminium", ar: "عكّازات ألمنيوم قابلة للتعديل" },
      desc: { fr: "Hauteur réglable, poignée ergonomique, embout antidérapant.", ar: "ارتفاع قابل للضبط، مقبض مريح، طرف مانع للانزلاق." },
      specs:{ fr: ["Charge max : 120 kg", "Réglage : 9 positions", "Matière : aluminium anodisé"],
              ar: ["الحمولة القصوى: 120 كغ", "الضبط: 9 وضعيات", "المادة: ألمنيوم مؤكسد"] },
      pack: { fr: "La paire", ar: "زوج" } },

    /* ---------- Équipement ---------- */
    { id: "p08", cat: "equipement", ref: "NP-EQ-301", icon: "wheelchair", img: "", home: true, featured: true,
      tags: ["stock"],
      name: { fr: "Fauteuil roulant pliant acier", ar: "كرسي متحرك قابل للطي من الفولاذ" },
      desc: { fr: "Châssis renforcé, accoudoirs relevables, charge 120 kg.", ar: "هيكل معزّز، مساند ذراع قابلة للرفع، حمولة 120 كغ." },
      specs:{ fr: ["Largeur d'assise : 46 cm", "Poids : 17 kg", "Charge max : 120 kg"],
              ar: ["عرض المقعد: 46 سم", "الوزن: 17 كغ", "الحمولة القصوى: 120 كغ"] },
      pack: { fr: "À l'unité, livré monté", ar: "بالوحدة، يُسلَّم مركّباً" } },

    { id: "p09", cat: "equipement", ref: "NP-EQ-318", icon: "nebulizer", img: "", home: true,
      tags: ["stock"],
      name: { fr: "Nébuliseur à compresseur", ar: "جهاز رذاذ بالضاغط" },
      desc: { fr: "Particules < 5 µm, silencieux, kits adulte et pédiatrique.", ar: "جزيئات أقل من 5 ميكرون، هادئ، طقم للكبار وآخر للأطفال." },
      specs:{ fr: ["Débit : 0,3 ml/min", "Bruit : < 55 dB", "Accessoires : 2 masques"],
              ar: ["التدفق: 0.3 مل/د", "الضجيج: أقل من 55 ديسيبل", "الملحقات: قناعان"] },
      pack: { fr: "Appareil + kit complet", ar: "جهاز + طقم كامل" } },

    { id: "p26", cat: "equipement", ref: "NP-EQ-330", icon: "bed", img: "", featured: true,
      tags: ["hospital"],
      name: { fr: "Lit médicalisé 2 manivelles", ar: "سرير طبي بذراعَي تحكّم" },
      desc: { fr: "Relève-buste et relève-jambes, barrières latérales, roues à frein.", ar: "رفع الظهر والساقين، حواجز جانبية، عجلات بمكابح." },
      specs:{ fr: ["Dimensions : 200 × 90 cm", "Charge max : 180 kg", "Roues : 4 avec frein"],
              ar: ["الأبعاد: 200 × 90 سم", "الحمولة القصوى: 180 كغ", "العجلات: 4 بمكابح"] },
      pack: { fr: "Livré et monté", ar: "يُسلَّم مركّباً" } },

    { id: "p27", cat: "equipement", ref: "NP-EQ-342", icon: "couch", img: "",
      tags: ["hospital"],
      name: { fr: "Divan d'examen", ar: "سرير فحص طبي" },
      desc: { fr: "Dossier réglable, porte-rouleau, sellerie lessivable.", ar: "مسند ظهر قابل للتعديل، حامل لفافة ورق، تنجيد قابل للغسل." },
      specs:{ fr: ["Dimensions : 185 × 60 cm", "Charge max : 150 kg", "Dossier : réglable"],
              ar: ["الأبعاد: 185 × 60 سم", "الحمولة القصوى: 150 كغ", "مسند الظهر: قابل للتعديل"] },
      pack: { fr: "Livré et monté", ar: "يُسلَّم مركّباً" } },

    { id: "p28", cat: "equipement", ref: "NP-EQ-355", icon: "pole", img: "",
      tags: ["stock", "hospital"],
      name: { fr: "Pied à sérum inox", ar: "حامل محاليل من الفولاذ" },
      desc: { fr: "4 crochets, hauteur réglable, base 5 roulettes.", ar: "4 خطافات، ارتفاع قابل للتعديل، قاعدة بخمس عجلات." },
      specs:{ fr: ["Hauteur : 120–220 cm", "Matière : inox 304", "Base : 5 roulettes"],
              ar: ["الارتفاع: 120–220 سم", "المادة: فولاذ 304", "القاعدة: 5 عجلات"] },
      pack: { fr: "À l'unité", ar: "بالوحدة" } },

    /* ---------- Protection ---------- */
    { id: "p10", cat: "protection", ref: "NP-PR-401", icon: "gloves", img: "", home: true,
      tags: ["single", "stock", "hospital"],
      name: { fr: "Gants d'examen nitrile", ar: "قفازات فحص من النتريل" },
      desc: { fr: "Non poudrés, ambidextres, haute résistance chimique.", ar: "بدون بودرة، لكلتا اليدين، مقاومة كيميائية عالية." },
      specs:{ fr: ["Tailles : XS à XL", "Épaisseur : 0,08 mm", "Normes : EN 455 / EN 374"],
              ar: ["المقاسات: من XS إلى XL", "السُمك: 0.08 مم", "المعايير: EN 455 / EN 374"] },
      pack: { fr: "Boîte de 100", ar: "علبة من 100" } },

    { id: "p11", cat: "protection", ref: "NP-PR-412", icon: "mask", img: "", home: true,
      tags: ["single", "stock", "hospital"],
      name: { fr: "Masque chirurgical type IIR", ar: "كمامة جراحية نوع IIR" },
      desc: { fr: "3 plis, barrette nasale, résistant aux projections.", ar: "ثلاث طبقات، مشبك أنفي، مقاومة للرذاذ." },
      specs:{ fr: ["Filtration : BFE ≥ 98 %", "Norme : EN 14683", "Attaches : élastiques"],
              ar: ["الترشيح: BFE ≥ 98 %", "المعيار: EN 14683", "التثبيت: أربطة مطاطية"] },
      pack: { fr: "Boîte de 50", ar: "علبة من 50" } },

    { id: "p17", cat: "protection", ref: "NP-PR-425", icon: "gown", img: "",
      tags: ["single", "hospital"],
      name: { fr: "Blouse de protection non tissée", ar: "مئزر واقٍ غير منسوج" },
      desc: { fr: "Poignets élastiqués, attaches au dos, 30 g/m².", ar: "أكمام مطاطية، أربطة خلفية، 30 غ/م²." },
      specs:{ fr: ["Tailles : M à XXL", "Grammage : 30 g/m²", "Usage : unique"],
              ar: ["المقاسات: من M إلى XXL", "الكثافة: 30 غ/م²", "الاستعمال: لمرة واحدة"] },
      pack: { fr: "Carton de 100", ar: "كرتونة من 100" } },

    { id: "p18", cat: "protection", ref: "NP-PR-430", icon: "bottle", img: "",
      tags: ["stock"],
      name: { fr: "Solution hydroalcoolique", ar: "محلول كحولي مائي" },
      desc: { fr: "Gel à 70 % d'éthanol, flacon pompe, enrichi en glycérine.", ar: "جل بنسبة 70 % إيثانول، قارورة بمضخة، مدعّم بالغليسيرين." },
      specs:{ fr: ["Volumes : 100 / 500 / 1000 ml", "Normes : EN 1500 / EN 14476", "Séchage : < 30 s"],
              ar: ["السعات: 100 / 500 / 1000 مل", "المعايير: EN 1500 / EN 14476", "الجفاف: أقل من 30 ثانية"] },
      pack: { fr: "Carton de 12 flacons", ar: "كرتونة من 12 قارورة" } },

    /* ---------- Soins & pansements ---------- */
    { id: "p12", cat: "soins", ref: "NP-SO-501", icon: "gauze", img: "", home: true,
      tags: ["sterile", "single", "stock", "hospital"],
      name: { fr: "Compresses de gaze stériles", ar: "كمّادات شاش معقّمة" },
      desc: { fr: "17 fils, 8 plis, sachets unitaires pelables.", ar: "17 خيطاً، 8 طيّات، أكياس فردية سهلة الفتح." },
      specs:{ fr: ["Formats : 7,5 × 7,5 / 10 × 10 cm", "Composition : 100 % coton", "Stérilisation : vapeur"],
              ar: ["المقاسات: 7.5 × 7.5 / 10 × 10 سم", "التركيب: 100 % قطن", "التعقيم: بالبخار"] },
      pack: { fr: "Boîte de 50 sachets", ar: "علبة من 50 كيساً" } },

    { id: "p13", cat: "soins", ref: "NP-SO-517", icon: "bandage", img: "", home: true,
      tags: ["sterile", "single"],
      name: { fr: "Pansement hydrocolloïde", ar: "ضمادة هيدروكولويد" },
      desc: { fr: "Plaies chroniques et escarres, port prolongé jusqu'à 7 jours.", ar: "للجروح المزمنة وقرح الفراش، تُترك حتى 7 أيام." },
      specs:{ fr: ["Formats : 10 × 10 / 15 × 15 cm", "Épaisseur : fine ou standard", "Indication : plaies chroniques"],
              ar: ["المقاسات: 10 × 10 / 15 × 15 سم", "السماكة: رقيقة أو قياسية", "الاستعمال: الجروح المزمنة"] },
      pack: { fr: "Boîte de 10", ar: "علبة من 10" } },

    { id: "p16", cat: "soins", ref: "NP-SO-524", icon: "roll", img: "",
      tags: ["stock"],
      name: { fr: "Bande de crêpe élastique", ar: "رباط كريب مطاطي" },
      desc: { fr: "Contention légère et maintien de pansement, réutilisable.", ar: "ضغط خفيف وتثبيت الضمادات، قابل لإعادة الاستعمال." },
      specs:{ fr: ["Largeurs : 7 / 10 / 15 cm", "Longueur : 4 m étirée", "Lavable à 60 °C"],
              ar: ["العرض: 7 / 10 / 15 سم", "الطول: 4 م مشدوداً", "قابل للغسل في 60 °م"] },
      pack: { fr: "Paquet de 12", ar: "حزمة من 12" } },

    /* ---------- Respiratoire ---------- */
    { id: "p19", cat: "respiratoire", ref: "NP-RS-601", icon: "o2mask", img: "",
      tags: ["single", "hospital"],
      name: { fr: "Masque à oxygène à réservoir", ar: "قناع أكسجين مع خزان" },
      desc: { fr: "Haute concentration, valves anti-retour, tubulure 2 m.", ar: "تركيز عالٍ، صمامات مانعة للرجوع، أنبوب بطول 2 م." },
      specs:{ fr: ["Tailles : adulte / pédiatrique", "Matériau : PVC médical", "Tubulure : 2 m"],
              ar: ["المقاسات: بالغ / أطفال", "المادة: PVC طبي", "الأنبوب: 2 م"] },
      pack: { fr: "Sachet unitaire", ar: "كيس فردي" } },

    { id: "p20", cat: "respiratoire", ref: "NP-RS-612", icon: "cannula", img: "",
      tags: ["single", "stock", "hospital"],
      name: { fr: "Lunettes à oxygène", ar: "قُنية أنفية للأكسجين" },
      desc: { fr: "Canule nasale souple, embouts courbes, tubulure anti-écrasement.", ar: "قُنية أنفية لينة، أطراف منحنية، أنبوب مقاوم للانسداد." },
      specs:{ fr: ["Longueur : 2 m", "Embouts : courbes, souples", "Raccord : universel"],
              ar: ["الطول: 2 م", "الأطراف: منحنية ولينة", "الوصلة: عالمية"] },
      pack: { fr: "Sachet unitaire", ar: "كيس فردي" } },

    /* ---------- Laboratoire ---------- */
    { id: "p23", cat: "laboratoire", ref: "NP-LB-701", icon: "tubes", img: "", featured: true,
      tags: ["sterile", "single", "stock", "hospital"],
      name: { fr: "Tubes de prélèvement sous vide", ar: "أنابيب سحب الدم بالتفريغ" },
      desc: { fr: "EDTA, citrate, sec, héparine : bouchons à code couleur.", ar: "EDTA، سيترات، جاف، هيبارين: سدادات بألوان مميّزة." },
      specs:{ fr: ["Volumes : 2 / 4 / 5 ml", "Norme : ISO 6710", "Intérieur : stérile"],
              ar: ["السعات: 2 / 4 / 5 مل", "المعيار: ISO 6710", "الداخل: معقّم"] },
      pack: { fr: "Rack de 100", ar: "حامل من 100" } },

    { id: "p24", cat: "laboratoire", ref: "NP-LB-712", icon: "pot", img: "",
      tags: ["sterile", "single", "stock"],
      name: { fr: "Pots à urine stériles", ar: "علب بول معقّمة" },
      desc: { fr: "60 ml, bouchon à vis étanche, étiquette d'identification.", ar: "60 مل، غطاء لولبي محكم، ملصق تعريف." },
      specs:{ fr: ["Volume : 60 ml", "Bouchon : à vis, étanche", "Étiquette : inscriptible"],
              ar: ["السعة: 60 مل", "الغطاء: لولبي محكم", "الملصق: قابل للكتابة"] },
      pack: { fr: "Carton de 500", ar: "كرتونة من 500" } },

    { id: "p25", cat: "laboratoire", ref: "NP-LB-720", icon: "slides", img: "",
      tags: [],
      name: { fr: "Lames et lamelles", ar: "شرائح وأغطية مجهرية" },
      desc: { fr: "Bords rodés, extrémité dépolie pour l'annotation.", ar: "حواف مصقولة، طرف مُصنفر للكتابة." },
      specs:{ fr: ["Format : 26 × 76 mm", "Épaisseur : 1–1,2 mm", "Bords : rodés à 90°"],
              ar: ["المقاس: 26 × 76 مم", "السُمك: 1–1.2 مم", "الحواف: مصقولة بزاوية 90°"] },
      pack: { fr: "Boîte de 50", ar: "علبة من 50" } }
  ],

  /* Chiffres d'exemple : à valider avec le client */
  stats: [
    { value: 1200, suffix: "+", fr: "références disponibles",       ar: "مرجع متوفّر" },
    { value: 350,  suffix: "+", fr: "établissements partenaires",   ar: "مؤسسة شريكة" },
    { value: 48,   suffix: "h", fr: "délai moyen de livraison",     ar: "متوسط مدة التسليم" },
    { value: 98,   suffix: "%", fr: "commandes livrées complètes",  ar: "من الطلبيات تُسلَّم كاملة" }
  ]
};

/* PROMPTS IMAGES PRODUITS (Midjourney / Flux) — 4:5, à détourer ensuite :
   "[PRODUCT], dark studio product photography, deep navy-black background #050E14, mint green rim light from the back left,
    soft cyan fill, shallow depth of field, floating at a slight angle, crisp clinical materials, subtle reflection on the floor,
    85mm lens, high detail, no text, no logo --ar 4:5 --style raw"
   [PRODUCT] = "a sterile 10 ml luer lock syringe" / "a digital upper-arm blood pressure monitor with cuff" /
               "a fingertip pulse oximeter" / "a folding steel wheelchair" / "a box of blue nitrile examination gloves" /
               "an articulated hinged knee brace" / "a compressor nebulizer with mask" / "a stack of sterile gauze pads in peel pouches" /
               "a set of vacuum blood collection tubes with colored caps" / "a two-crank hospital bed" */
