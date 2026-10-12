/* =====================================================================
   NASOURAI PHARM — données du site (catégories + produits)
   • Images : assets/img/produits/<slug>.jpg (+ -2.jpg pour la 2e photo)
   • Fiches techniques : assets/fiches/<slug>.pdf
   • featured: true → affiché dans « Produits phares » sur l'accueil
   • Lien direct vers un produit : produit.html#<slug>   (catégorie : produits.html#<id>)
   ===================================================================== */
window.NP = {
  contacts: {
    standard:   { label: "Standard",   display: "040 70 80 57",  tel: "+21340708057" },
    contact:    { label: "Contact",    display: "0563 02 27 80", tel: "+213563022780" },
    commercial: { label: "Commercial", display: "0563 02 27 81", tel: "+213563022781" },
    whatsapp: "213563022781",
    address: "72 Logements, route de Tessala, Sidi Bel Abbès, Algérie",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Route+Tessala+Sidi+Bel+Abbes+Algerie",
    mapsEmbed: "https://www.google.com/maps?q=Route+Tessala,+Sidi+Bel+Abbes,+Algerie&output=embed"
  },

  categories: [
    { id: "diagnostic",      name: "Diagnostic médical",                 short: "Diagnostic",       cover: "tensiometre-aneroide",
      text: "Tensiomètres, stéthoscopes, pèse-bébé, ophtalmoscope et outils d'examen pour les cabinets et les pharmacies." },
    { id: "surveillance",    name: "Surveillance et monitorage",         short: "Monitorage",       cover: "moniteur-7-parametres",
      text: "Moniteurs multiparamétriques pour les soins intensifs, les urgences et les services hospitaliers." },
    { id: "bloc",            name: "Bloc opératoire et réanimation",     short: "Bloc opératoire",  cover: "table-operatoire-mt600",
      text: "Bistouris électriques, pousse-seringues, réchauffeurs, tables d'opération et aspirateurs de mucosité." },
    { id: "laboratoire",     name: "Équipements de laboratoire",         short: "Laboratoire",      cover: "spectrophotometre-jenway-7305",
      text: "Autoclaves de classe B et spectrophotomètres pour les laboratoires, cliniques et cabinets dentaires." },
    { id: "mobilier",        name: "Mobilier médical",                   short: "Mobilier",         cover: "lit-reanimation-electrique",
      text: "Lits de réanimation, fauteuils de prélèvement, chariots de transfert et chariots à médicaments." },
    { id: "soins",           name: "Dispositifs de soin et de pansement", short: "Soin & pansement", cover: "pansement-anti-escarres",
      text: "Pansements hydrocolloïdes anti-escarres pour la cicatrisation et la prévention des plaies." },
    { id: "instrumentation", name: "Instrumentation médicale",           short: "Instrumentation",  cover: "plateaux-inox",
      text: "Plateaux et haricots en acier inoxydable 18/10, sans soudures, pour le bloc et les soins." },
    { id: "consommables",    name: "Consommables médicaux",              short: "Consommables",     cover: "gel-echographie-5l",
      text: "Lames de bistouri, kits de péridurale, aiguilles épicrâniennes, gaines de stérilisation et gel d'échographie." }
  ],

  products: [
    /* ---------------- Diagnostic médical ---------------- */
    { slug: "tensiometre-aneroide", cat: "diagnostic", brand: "StarCare", featured: true, images: 2,
      name: "Tensiomètre anéroïde manuel avec stéthoscope",
      short: "Cadran de 62 mm, brassard en coton et stéthoscope inclus. Noir, vert ou orange.",
      desc: "Le tensiomètre anéroïde manuel StarCare est un outil complet et fiable pour la mesure de la pression artérielle. Il est équipé d'un cadran large de 62 mm, d'un boîtier robuste en ABS et d'un brassard en coton, plus confortable et respirant que les versions en nylon. Il est livré avec un stéthoscope de qualité médicale pour une utilisation immédiate.",
      specs: ["Boîtier et poignée : plastique ABS", "Diamètre du cadran : 62 mm", "Brassard adulte : coton, taille standard", "Vessie interne : simple tubulure en PVC", "Poire de gonflage : PVC standard", "Valve de décompression : valve plastique", "Étui de transport : housse zippée en vinyle", "Stéthoscope inclus"],
      highlights: ["Brassard en coton doux et confortable", "Solution tout-en-un avec stéthoscope", "3 couleurs : noir, vert, orange", "Grand cadran pour une lecture rapide"] },

    { slug: "tensiometre-omron-m7", cat: "diagnostic", brand: "Omron", featured: true, images: 1,
      name: "Tensiomètre électronique Omron M7 Intelli IT AFib",
      short: "Tensiomètre automatique au bras avec détection de la fibrillation auriculaire et Bluetooth.",
      desc: "Le M7 Intelli IT AFib (HEM-7380T1-EBK) est un tensiomètre automatique au bras validé cliniquement pour la population générale, les personnes diabétiques et les femmes enceintes. Sa technologie Intellisense AFib détecte une possible fibrillation auriculaire à chaque prise de tension. Il se connecte à l'application OMRON connect.",
      specs: ["Référence : HEM-7380T1-EBK", "Brassard : Intelli Wrap préformé, adulte 22–42 cm", "Bluetooth : oui · Date et heure : oui", "Alimentation : 4 piles AA 1,5 V (700 mesures) ou adaptateur secteur", "Mémoire : 100 mesures × 2 utilisateurs + mode invité", "Conditions d'utilisation : +10 à +40 °C, 15 à 90 % d'humidité", "Dimensions du moniteur : 191 × 85 × 117 mm, 440 g", "Garantie : moniteur 5 ans, accessoires 1 an"],
      highlights: ["Détection de la fibrillation auriculaire", "Mode TruRead : moyenne de 3 mesures", "Indicateurs d'hypertension et de battements irréguliers", "Validé cliniquement"] },

    { slug: "stethoscope-double-pavillon", cat: "diagnostic", brand: "StarCare", images: 1,
      name: "Stéthoscope Colors double pavillon",
      short: "Pavillon double tête en aluminium anodisé, membrane Ø 47 mm. Plusieurs couleurs.",
      desc: "Stéthoscope adulte à double pavillon en aluminium anodisé, adapté à l'auscultation du cœur et des poumons. Le petit pavillon est destiné à l'auscultation des sons légers et de basse fréquence.",
      specs: ["Pavillon double tête pour adulte", "Pavillon en aluminium anodisé", "Membrane Ø 47 mm, sensible à la collecte du son", "Tube simple standard en PVC", "Disponible en plusieurs couleurs"],
      highlights: ["Auscultation cardiaque et pulmonaire", "Alliage d'aluminium pour une meilleure conduction sonore"] },

    { slug: "stethoscope-pediatrique", cat: "diagnostic", brand: "StarCare", images: 1,
      name: "Stéthoscope pédiatrique",
      short: "Simple pavillon, livré avec 5 figurines animales interchangeables pour rassurer l'enfant.",
      desc: "Le stéthoscope pédiatrique StarCare rend l'auscultation des enfants plus agréable et rassurante. Doté d'un simple pavillon et livré avec un jeu de 5 figurines animales interchangeables, il capte l'attention des plus jeunes et facilite l'examen.",
      specs: ["Récepteur en acier inoxydable recouvert de plastique", "Bague antifroid", "Lyre en acier inoxydable avec ressort intégré", "Embouts auriculaires souples", "Membrane : Ø 32 mm", "Longueur du tube : 580 mm"],
      highlights: ["5 figurines ludiques et faciles à changer", "Confort du patient et du praticien"] },

    { slug: "pese-bebe-mecanique", cat: "diagnostic", brand: "StarCare", images: 1,
      name: "Pèse-bébé mécanique",
      short: "Structure tout acier, plateau amovible, graduations de 1 g, jusqu'à 15 kg.",
      desc: "Conçu pour un usage quotidien en milieu médical ou en cabinet pédiatrique, ce pèse-bébé mécanique allie simplicité d'utilisation et grande fiabilité pour le suivi de la croissance des nourrissons.",
      specs: ["Structure en acier, fabrication tout métal", "Plateau en métal amovible", "Graduations : 1 g", "Capacité maximale : 15 kg"],
      highlights: ["Lecture rapide et manipulation aisée", "Nettoyage facile du plateau"] },

    { slug: "pese-personne-pharmacie", cat: "diagnostic", brand: "StarCare", featured: true, images: 1,
      name: "Pèse-personne électronique pour pharmacie",
      short: "Monnayeur, guidage vocal, impression : poids, taille, IMC, masse grasse et eau.",
      desc: "Le pèse-personne électronique à monnayeur StarCare est destiné aux pharmacies. Son monnayeur, sa fonction d'impression et son guidage vocal permettent aux clients d'obtenir seuls leur poids, leur taille, leur IMC, leur masse graisseuse et leur pourcentage d'eau.",
      specs: ["Capacité : 200 kg, graduation de 50 g", "Mesure de la taille par ultrasons", "Guidage vocal des étapes et des mesures", "Impression du rapport de données corporelles", "Monnayeur (pièces de monnaie)"],
      highlights: ["Service en libre accès pour la pharmacie", "Mesures complètes en une seule pesée"] },

    { slug: "echelle-optometrique-led", cat: "diagnostic", brand: "StarCare", images: 1,
      name: "Échelle optométrique LED extra-plate",
      short: "Éclairage LED homogène, modèle adulte analphabète, versions 5 m et 2,5 m.",
      desc: "L'échelle optométrique LED extra-plate StarCare est conçue pour les tests de vision chez l'adulte, en particulier pour les patients analphabètes. Son éclairage LED homogène garantit une excellente lisibilité. Compacte, elle s'intègre dans tout cabinet médical ou ophtalmologique.",
      specs: ["Source lumineuse : LED haute performance", "Température de couleur : 9 000 K", "Luminosité réglable : 0 – 3 500 cd/m²", "Alimentation : AC 100 – 240 V, 50 Hz", "Puissance : 10 W (5 m) / 5 W (2,5 m)", "Écran : 252 × 852 mm (5 m) / 252 × 552 mm (2,5 m)", "Cadre : 298 × 898 × 6 mm (5 m) / 298 × 598 × 6 mm (2,5 m)"],
      highlights: ["Design extra-plat et léger", "Cabinets d'ophtalmologie, d'optométrie et centres médicaux"] },

    { slug: "ophtalmoscope-led", cat: "diagnostic", brand: "StarCare", images: 1,
      name: "Ophtalmoscope LED",
      short: "Optique asphérique, 5 diaphragmes, correction de −20 D à +20 D. Coffret rigide.",
      desc: "L'ophtalmoscope LED StarCare offre une qualité d'examen remarquable grâce à son optique asphérique et à son éclairage LED puissant et homogène. Robuste et léger, il garantit des diagnostics fiables au quotidien.",
      specs: ["Éclairage LED, lumière blanche concentrée", "Optique asphérique : moins de reflets, image plus nette", "5 diaphragmes", "Correction : de −20 D à +20 D", "Clip de fixation avec interrupteur intégré", "Coffret rigide et 2 piles alcalines inclus"],
      highlights: ["Robuste et léger pour un usage intensif"] },

    { slug: "abaisse-langue-bois", cat: "diagnostic", brand: "StarCare", images: 1,
      name: "Abaisse-langue en bois adulte",
      short: "Bois naturel lisse, usage unique, 150 × 18 × 2 mm.",
      desc: "L'abaisse-langue en bois adulte StarCare est conçu pour les examens cliniques de la cavité buccale et de la gorge. À usage unique, il limite le risque de contamination croisée.",
      specs: ["Usage : auscultation des adultes", "Matériau : bois naturel, lisse et non irritant", "Usage unique", "Dimensions : 150 × 18 × 2 mm"],
      highlights: ["Hygiène : modèle jetable", "Contact agréable pour le patient"] },

    /* ---------------- Surveillance et monitorage ---------------- */
    { slug: "moniteur-7-parametres", cat: "surveillance", brand: "StarCare", featured: true, images: 1,
      name: "Moniteur de surveillance 7 paramètres",
      short: "ECG, RESP, SpO2, PR, NIBP, TEMP, IBP et CO2. Écran couleur 12,1''.",
      desc: "Le moniteur de surveillance StarCare assure une surveillance continue et précise des paramètres vitaux : ECG, RESP, SpO2, PR, NIBP, TEMP (double canal), IBP (double canal) et capnographie CO2. Compact et portable, il est adapté aux soins intensifs et aux urgences. Il convient aux adultes, aux enfants et aux nouveau-nés.",
      specs: ["ECG : 3 à 5 dérivations, double canal, surveillance ST", "RESP : impédance thoracique, alarme d'apnée 10–40 s", "SpO2 : 0–100 %, précision ±2 % (70–100 %)", "PR : 30–250 bpm", "NIBP : oscillométrique, manuel/auto/continu, 4 800 mesures", "TEMP : 0–50 °C, double canal", "Écran TFT couleur 12,1'', jusqu'à 8 courbes", "Alimentation : 110–240 V ou batterie lithium intégrée", "Sécurité : classe I, type CF, résistant à la défibrillation", "Poids : 3,9 kg"],
      highlights: ["Analyse de la variabilité cardiaque (HRV)", "Connexion à une centrale via Wi-Fi, 3G ou câble", "Impression des tendances"] },

    /* ---------------- Bloc opératoire et réanimation ---------------- */
    { slug: "table-operatoire-mt600", cat: "bloc", brand: "StarCare", featured: true, images: 2,
      name: "Table d'opération chirurgicale MT600",
      short: "Plateau multi-sections, Trendelenburg, inclinaison latérale et pont rénal.",
      desc: "La table d'opération STARCARE MT600 est utilisée en chirurgie générale et thoracique, en ORL, en gynécologie-obstétrique, en urologie et en orthopédie. Son plateau multi-sections (tête, dos, siège, jambes) permet tous les positionnements opératoires.",
      specs: ["Plateau multi-sections : tête, dos, siège, jambes", "Élévation par colonne", "Trendelenburg et inclinaison latérale par poignée unique", "Fonction pont rénal", "Freins à main et roues", "Manivelle de réglage"],
      highlights: ["Chirurgie générale, ORL, gynécologie, urologie, orthopédie", "Fonctionnement indépendant de toute source d'énergie"] },

    { slug: "bistouri-zeus-400p", cat: "bloc", brand: "StarCare", featured: true, images: 2,
      name: "Bistouri électrique ZEUS-400P + chariot offert",
      short: "5 modes de coupe, coagulation mono et bipolaire, REM, 10 profils utilisateurs.",
      desc: "Le bistouri électrique ZEUS-400P StarCare fournit les fonctions nécessaires au bloc opératoire : coupe, coagulation et coagulation bipolaire à la main ou à la pédale. Ses 5 types de coupe et l'enregistrement de 10 profils utilisateurs en font un outil indispensable. Le chariot est offert.",
      specs: ["Fréquence principale : 400 / 500 kHz", "Tension nominale : 120 / 230 V CA, 50 / 60 Hz", "Consommation : 1 200 VA", "Classe 1, type BF", "REM : surveillance de la plaque neutre", "Modes : coupe pure, coupe mixte 1-2-3, coagulation contact et spray, bipolaire main et pédale", "Dimensions : 330 × 455 × 150 mm", "Poids : 13 kg"],
      highlights: ["Chariot offert", "Mémoire de 10 profils utilisateurs"] },

    { slug: "bistouri-zeus-100", cat: "bloc", brand: "StarCare", images: 1,
      name: "Bistouri électrique ZEUS-100",
      short: "Pour la pratique ambulatoire : coupe monopolaire, coagulation mono et bipolaire.",
      desc: "Le ZEUS-100 est un bistouri électrique adapté à la pratique ambulatoire, avec coagulation monopolaire et bipolaire et découpe monopolaire.",
      specs: ["Fonctions coupe pure et coupe mixte", "Certifications : CE, ISO 13485, KFDA", "Tension : 120 / 230 V CA, 50 / 60 Hz", "Consommation : 300 VA ±10 %", "Classe 1, type BF", "Fréquence porteuse : 1,6 MHz", "Dimensions : 270 × 310 × 110 mm", "Poids : 6 kg"],
      highlights: ["Compact, pensé pour le cabinet"] },

    { slug: "pousse-seringue-1-voie", cat: "bloc", brand: "StarCare", images: 1,
      name: "Pousse-seringue 1 voie",
      short: "Double CPU, bolus manuel et automatique, seringues de 5 à 60 ml.",
      desc: "Le pousse-seringue à une voie StarCare administre de faibles volumes de fluide, avec ou sans médicament, avec des seringues de 5 à 60 ml. Sa programmation rapide permet de lancer une perfusion en quelques secondes, en toute sécurité.",
      specs: ["Écran 2,8'' à double affichage LED et LCD", "Système double CPU", "Modes : débit, temps/volume, dose/poids, bolus", "Compatible toutes marques de seringues", "Occlusion : sensibilité à 3 niveaux, anti-bolus", "Historique : 2 000 enregistrements", "Utilisation : +5 à +40 °C, humidité ≤ 80 %"],
      highlights: ["Bibliothèque de médicaments évolutive", "Pince de fixation rotative"] },

    { slug: "pousse-seringue-2-voies", cat: "bloc", brand: "StarCare", images: 1,
      name: "Pousse-seringue électrique 2 voies",
      short: "Deux voies indépendantes, seringues 5 à 60 ml, débit de 0,1 à 1 200 ml/h.",
      desc: "Le pousse-seringue à 2 voies StarCare est un appareil de perfusion indépendant qui contrôle de manière intelligente l'ensemble du processus de perfusion, avec deux interfaces de fonctionnement séparées.",
      specs: ["Deux voies indépendantes", "Système à double processeur", "Modes : débit, temps/volume, dose/poids, bolus", "Seringues : 5, 10, 20, 30, 50/60 ml", "Débit : 0,1 ml/h à 1 200 ml/h (seringue 50 ml)", "Pression d'occlusion : 3 niveaux, anti-bolus", "Historique : 2 000 entrées"],
      highlights: ["Fixation rotative verticale et horizontale", "Surveillance sans fil évolutive"] },

    { slug: "rechauffeur-sang", cat: "bloc", brand: "StarCare", images: 1,
      name: "Réchauffeur de sang et de fluides",
      short: "Réchauffeur sec compact, 30 à 42 °C, double rainure pour deux perfusions.",
      desc: "Le réchauffeur de fluides StarCare est un réchauffeur sec compact, facile à transporter et à installer. Il réchauffe les perfusions, les transfusions, la nutrition intraveineuse et l'alimentation nasale.",
      specs: ["Plage de chauffage : 30 °C – 42 °C, pas de 1 °C ou 0,1 °C", "Précision : ≤ ±1 °C", "Double rainure pour deux sets de perfusion", "Diamètre de tube : 3 – 4,5 mm", "Alarmes de surchauffe et de basse température", "Coupure automatique en cas de surchauffe", "Classe I, type B"],
      highlights: ["Montage suspendu ou sur potence", "Écran couleur détaillé"] },

    { slug: "aspirateur-mucosite", cat: "bloc", brand: "StarCare", images: 1,
      name: "Aspirateur de mucosité électrique avec batterie",
      short: "Portable, 15 L/min, réservoir 1 L, 30 minutes d'autonomie.",
      desc: "L'aspirateur de mucosité StarCare est un appareil portable pour l'aspiration des mucosités, des fluides et du sang lors de petites interventions. Son autonomie et son réservoir de 1 L en font l'outil idéal pour les soins à domicile.",
      specs: ["Débit : ≥ 15 L/min", "Pression négative maximale : ≥ 0,075 MPa", "Réglage de la pression négative pas à pas", "Réservoir : 1 L", "Autonomie : 30 min en continu", "Puissance d'entrée : 90 VA", "Bruit : ≤ 65 dB", "Pompe sans huile"],
      highlights: ["Petit, léger et portable"] },

    /* ---------------- Équipements de laboratoire ---------------- */
    { slug: "autoclave-23l", cat: "laboratoire", brand: "StarCare", featured: true, images: 1,
      name: "Autoclave de paillasse 23 L classe B",
      short: "3 vides fractionnés, 9 programmes, imprimante intégrée et port USB.",
      desc: "L'autoclave de paillasse 23 L StarCare est un stérilisateur à vapeur conforme à la classe B européenne. Il stérilise les instruments emballés ou non, le linge et les textiles, pour les cabinets dentaires, cliniques, laboratoires et centres de soins.",
      specs: ["Capacité : 23 L, chambre Ø 250 × 450 mm", "Température : 116 °C à 134 °C", "Pression : −0,1 ~ 0,25 MPa", "Stérilisation : 4 à 120 min · Séchage : 0 à 240 min", "Puissance : 2,2 kW · AC 220 V 50 Hz", "9 programmes + 3 programmes de test", "Écran LED couleur 4,3''", "Dimensions : 640 × 505 × 450 mm · Poids net : 51 kg"],
      highlights: ["Imprimante intégrée et port USB pour la traçabilité", "Générateur de vapeur indépendant"] },

    { slug: "spectrophotometre-jenway-7305", cat: "laboratoire", brand: "Jenway", images: 1,
      name: "Spectrophotomètre Jenway 7305 UV-VIS",
      short: "198 à 1 000 nm, lampe au xénon, absorbance, transmittance et concentration.",
      desc: "Le spectrophotomètre Jenway 7305 dispose d'un logiciel piloté par icônes et d'une navigation simplifiée pour une utilisation intuitive.",
      specs: ["Système optique : faisceau unique", "Longueur d'onde : 198 à 1 000 nm", "Résolution : 1 nm · Précision : ±2 nm", "Bande passante : 5 nm", "Transmission : 0 à 199,9 %", "Absorbance : −0,3 à 2,5", "Lumière parasite : < 0,5 %T", "Lampe au xénon, mémorisation automatique"],
      highlights: ["Accessoires : porte-cuve 10 × 10 mm, 100 cuves, logiciel PC, câble"] },

    /* ---------------- Mobilier médical ---------------- */
    { slug: "lit-reanimation-electrique", cat: "mobilier", brand: "StarCare", featured: true, images: 1,
      name: "Lit de réanimation électrique 3 positions",
      short: "Hauteur variable, barrières rabattables, potence et roulettes à frein centralisé.",
      desc: "Le lit de réanimation électrique StarCare offre un confort optimal au patient et une fonctionnalité maximale au personnel soignant. Idéal pour les soins intensifs, la réanimation et les soins post-opératoires.",
      specs: ["Dimensions : 208 × 96 × 48–70 cm", "Dossier : 0° à 75° ±5°", "Jambes : 0° à 45° ±5°", "Hauteur : 48 à 70 cm", "Tête et pied de lit en ABS", "Barrières latérales en aluminium, rabattables", "4 roulettes de 5'' avec frein centralisé", "Potence intégrée"],
      highlights: ["Commandes électriques simples", "Sécurité : barrières et freinage intégré"] },

    { slug: "fauteuil-prelevement", cat: "mobilier", brand: "StarCare", images: 1,
      name: "Fauteuil de prélèvement",
      short: "Acier époxy, matelas haute densité, potence et accoudoirs réglables.",
      desc: "Conçu pour le confort du patient et la praticité du personnel, le fauteuil de prélèvement StarCare combine robustesse, ergonomie et accessibilité grâce à sa structure ouverte.",
      specs: ["Dimensions : L 68 × P 80 × H 110 cm", "Surface étendue : 68 × 130 cm", "Structure : acier peint époxy", "Assise : matelas haute densité", "Potence intégrée et deux accoudoirs réglables"],
      highlights: ["Laboratoires, centres de prélèvement, cliniques"] },

    { slug: "chariot-transfert-malade", cat: "mobilier", brand: "StarCare", images: 1,
      name: "Chariot de transfert malade",
      short: "Freinage central, dossier 0–60°, matelas et potence inclus, 180 kg.",
      desc: "Le chariot de transfert StarCare est une civière manuelle polyvalente pour le transport sécurisé et confortable des patients. Robuste et maniable, il répond aux exigences d'un usage hospitalier quotidien.",
      specs: ["Dimensions : 1 930 × 640 × 650–860 mm", "Hauteur réglable : 560 à 860 mm (manivelle)", "Dossier : 0° à 60°", "Charge : 180 kg", "Roulettes Ø 150 mm à verrouillage central", "Signaux lumineux de freinage", "Rails latéraux ABS amovibles", "Matelas, potence et support de bouteille d'oxygène inclus"],
      highlights: ["Plateforme ABS facile à nettoyer"] },

    { slug: "chariot-medicament", cat: "mobilier", brand: "StarCare", images: 1,
      name: "Chariot pour médicaments",
      short: "5 étagères avant et arrière, serrure centrale, 4 roulettes silencieuses.",
      desc: "Le chariot pour médicaments StarCare est conçu pour le rangement, le transport et la distribution des médicaments en hôpital, en clinique ou en établissement de soins.",
      specs: ["Dimensions : 750 × 475 × 920 mm", "Plateau supérieur ABS monobloc à bords relevés", "Structure : 4 colonnes plastique-acier", "Avant et arrière : 5 étagères à séparateurs amovibles", "Serrure centrale rabattable", "Côtés : boîtes de classement et 2 poubelles ABS", "4 roulettes silencieuses dont 2 à frein", "Poids : 48,4 kg"],
      highlights: ["Organisation optimale", "Déplacement fluide et silencieux"] },

    /* ---------------- Soin et pansement ---------------- */
    { slug: "pansement-anti-escarres", cat: "soins", brand: "StarCare", images: 1,
      name: "Pansement anti-escarres hydrocolloïde",
      short: "Favorise la cicatrisation, du 5 × 5 cm au 20 × 20 cm.",
      desc: "Les pansements hydrocolloïdes anti-escarres favorisent la cicatrisation et forment une barrière contre les agressions et les infections bactériennes.",
      specs: ["Type : hydrocolloïde", "Formats : 5 × 5 · 7,5 × 7,5 · 10 × 10 · 15 × 15 · 15 × 20 · 20 × 20 cm"],
      highlights: ["Prévention et traitement des escarres"] },

    /* ---------------- Instrumentation ---------------- */
    { slug: "plateaux-inox", cat: "instrumentation", brand: "StarCare", images: 1,
      name: "Plateaux en acier inoxydable",
      short: "Inox 18/10 embouti sans soudures, 5 dimensions.",
      desc: "Plateaux en acier inoxydable 18/10 pour un usage médical intensif. Fabriqués par emboutissage, sans soudures, ils offrent une surface lisse et une hygiène optimale.",
      specs: ["Matériau : inox 18/10", "Sans soudures", "Réf. 5901 : 200 × 150 × 25 mm", "Réf. 5902 : 260 × 180 × 30 mm", "Réf. 5903 : 300 × 220 × 30 mm", "Réf. 5904 : 350 × 250 × 40 mm", "Réf. 5905 : 220 × 170 × 50 mm"],
      highlights: ["Blocs opératoires, soins, laboratoires"] },

    { slug: "haricot-inox", cat: "instrumentation", brand: "StarCare", images: 1,
      name: "Haricot en acier inoxydable",
      short: "Inox 18/10 sans soudures, 4 tailles de 160 à 280 mm.",
      desc: "Haricot en acier inoxydable 18/10 pour la collecte de liquides, de pansements usagés ou d'instruments. Sa conception sans soudures facilite le nettoyage et la stérilisation.",
      specs: ["Matériau : inox 18/10", "Sans soudures", "Réf. 5953 : 160 × 60 × 30 mm", "Réf. 5954 : 200 × 95 × 35 mm", "Réf. 5955 : 250 × 115 × 40 mm", "Réf. 5956 : 280 × 130 × 45 mm"],
      highlights: ["Soins, interventions chirurgicales, soins infirmiers"] },

    /* ---------------- Consommables ---------------- */
    { slug: "gel-echographie-5l", cat: "consommables", brand: "StarCare", featured: true, images: 1,
      name: "Gel d'échographie – bidon de 5 L",
      short: "Gel bleu haute conductivité, hypoallergénique. Flacon vide de 250 ml fourni.",
      desc: "Le gel écho StarCare est un gel de contact conçu pour les examens échographiques. Sa formule hypoallergénique, non irritante et sans résidu en fait un choix sûr pour les professionnels de santé.",
      specs: ["Gel bleu à forte conductivité", "Hypoallergénique, non gras, sans alcool ni parfum", "Bidon de 5 L", "Flacon vide de 250 ml fourni", "Ne tache pas, sans résidu"],
      highlights: ["Échographie, ECG, doppler"] },

    { slug: "lames-bistouri", cat: "consommables", brand: "StarCare", images: 1,
      name: "Lames de bistouri stériles",
      short: "Acier médical, stérilisées aux rayons gamma, pour manches n° 3 et n° 4.",
      desc: "Les lames de bistouri stériles STARCARE sont fabriquées en acier de qualité médicale et stérilisées aux rayons gamma après emballage, pour un usage clinique unique.",
      specs: ["Force d'incision : ≤ 8 N", "Dureté : carbone ≥ 800 HV10, inox ≥ 700 HV10", "Stérilisation : rayons gamma, SAL 10⁻⁶", "Manche n° 3 : n° 9 à 17, 10A, 12B, 12D, 15A, 15C", "Manche n° 4 : n° 18 à 27, 34, 36, 22A"],
      highlights: ["Usage unique"] },

    { slug: "kit-anesthesie-peridurale", cat: "consommables", brand: "StarCare", images: 1,
      name: "Kit d'anesthésie péridurale",
      short: "Aiguille Tuohy 18G, cathéter, filtre 0,22 µm et seringue LOR. Stérile.",
      desc: "Ce kit contient les composants nécessaires à la réalisation d'une anesthésie péridurale en toute sécurité. Son filtre empêche les particules présentes dans les médicaments d'atteindre le cathéter.",
      specs: ["Aiguille péridurale Tuohy 18G × 80 mm", "Cathéter multi-ports 0,8 / 1,0 mm, ≥ 850 mm", "Filtre 0,22 / 0,2 µm, Luer Lock", "Seringue LOR : 5, 7 ou 10 ml", "Adaptateur de cathéter", "Stérilisé à l'oxyde d'éthylène", "Emballage individuel stérile, usage unique"],
      highlights: ["Réservé aux professionnels de santé"] },

    { slug: "aiguille-epicranienne", cat: "consommables", brand: "StarCare", images: 2,
      name: "Aiguille épicrânienne",
      short: "Acier SUS304 siliconé, ailettes souples, code couleur. Stérile, usage unique.",
      desc: "L'aiguille épicrânienne StarCare est conçue pour les perfusions et les prélèvements veineux de courte durée. Précise et sécurisée, elle assure le confort du patient et une manipulation sûre.",
      specs: ["Aiguille inox SUS304 avec revêtement silicone", "Longueur de canule : 19 mm (3/4'')", "Pointe ultra-affûtée", "Ailettes souples type papillon", "Code couleur du calibre aux normes internationales", "Tubulure souple et transparente", "Capuchon de protection", "Stérile, apyrogène, usage unique", "Couleurs : bleu, vert"],
      highlights: ["Hôpitaux, cliniques, laboratoires et soins à domicile"] },

    { slug: "gaine-sterilisation", cat: "consommables", brand: "StarCare", images: 1,
      name: "Gaine de stérilisation",
      short: "Rouleaux papier et film, 150 mm ou 300 mm × 200 m.",
      desc: "Les gaines de stérilisation StarCare protègent les instruments de chirurgie pendant et après le passage en autoclave. Le papier laisse pénétrer la vapeur saturée pour une stérilisation complète.",
      specs: ["Film polyéthylène transparent + papier médical", "Rouleau à découper à la longueur", "150 mm × 200 m", "300 mm × 200 m"],
      highlights: ["Compatible autoclave vapeur"] }
  ]
};
