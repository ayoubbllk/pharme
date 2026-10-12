# NASOURAI PHARM — Direction artistique & photographique

> Livrable : page d'accueil codée (`index.html`, `css/`, `js/`) + ce document.
> Ouvrir `index.html` dans un navigateur. Version arabe : `index.html?lang=ar` ou bouton **FR / ع**.

---

## 1. Trois directions créatives

### A — « Atlas Clinique » ✅ retenue
**Concept :** chaque dispositif existe deux fois, comme **plan technique** (la précision, l'expertise) et comme **objet réel** (le soin, la disponibilité). Le site passe de l'un à l'autre : une loupe révèle l'objet sous le plan, et les cartes produits font apparaître une grille millimétrée au survol.
- **Palette :** Porcelaine `#F6F4F0` · Encre `#0C1A22` · Céladon `#1F6F62` · Safran `#F2A93B` (signal) · Céladon clair `#DDEDE8`
- **Typographies :** *Instrument Serif* (titres, italiques élégantes) · *Manrope* (texte) · *JetBrains Mono* (références, cotes, étiquettes) · *IBM Plex Sans Arabic* (arabe)
- **Animations :** précises et mécaniques : vue éclatée, réticule, compteurs, apparitions courtes et nettes
- **Photo :** lumière latérale douce, fonds porcelaine, gros plans de matière, gestes réels
- **Pourquoi :** elle dit « expertise » sans le bleu hôpital ni la croix verte. L'encre et le safran évoquent l'instrumentation et l'étiquetage pharmaceutique ; le céladon, le soin. Le motif plan / réel est propre à un importateur, dont le métier est de connaître le produit dans le détail.

### B — « Lumière du Tell »
**Concept :** la santé de proximité dans l'ouest algérien. Tons sable `#EADCC6`, terracotta `#B5583A`, olivier `#5E6B3A`, blanc chaux. Typo *Fraunces* + *Tajawal*. Photos éditoriales chaleureuses de pharmaciens, de livreurs et de la lumière de fin de journée à Sidi Bel Abbès. Animations lentes, fondus et parallaxe.
- **Point fort :** très humaine, très locale. **Limite :** évoque moins la technologie et la rigueur réglementaire, alors que les acheteurs hospitaliers attendent ces signaux.

### C — « Flux »
**Concept :** la chaîne logistique en temps réel. Mode sombre, vert menthe néon `#3CF0B4`, grille de données, carte de l'Algérie avec des itinéraires de livraison animés, typo *Space Grotesk*. Visuels 3D et rendus produits en verre dépoli.
- **Point fort :** effet « tech » immédiat. **Limite :** froide, et le mode sombre intégral passe mal dans le médical (lisibilité, perception de propreté).

**Choix :** A, en reprenant à B l'authenticité des portraits et des lieux, et à C la précision des données (chiffres en mono, compteurs).

---

## 2. La page, section par section

| # | Section | Hiérarchie & contenu | Animations / interactions |
|---|---|---|---|
| 0 | **Header** | Logo (monogramme N + point safran : « le point de précision »), 4 liens, FR/ع, bouton *Demander un devis* avec compteur | Devient translucide (verre dépoli) au scroll, se masque en descendant, réapparaît en remontant. Lien actif selon la section visible. Menu burger plein écran sur mobile |
| 1 | **Hero** | Titre « La précision *qui soigne.* », accroche, 2 boutons, 3 preuves (CE · 48 h · 1 200+) | **Scène « plan / réel »** : un plan technique sur fond encre ; une **loupe** suit la souris ou le doigt et révèle l'objet réel, grossi ×1,25 ; les pièces se **séparent en vue éclatée** quand on explore. Inclinaison 3D légère, coordonnées X/Y affichées en temps réel, 3 objets (seringue, oxymètre, flacon) qui défilent toutes les 7 s avec une barre de progression. Au repos, la loupe se déplace seule. Pilotable au clavier (flèches). Boutons magnétiques |
| — | **Bandeau** | Pharmacies ✦ Cliniques ✦ Hôpitaux… | Défilement continu, sens inversé en arabe |
| 2 | **L'entreprise** | Titre + texte + 3 valeurs A/B/C (Rigueur, Proximité, Fiabilité). Photo 4:5 + photo macro en incrustation + tampon rotatif « Sidi Bel Abbès » | Apparitions décalées ; les valeurs se décalent légèrement au survol |
| 3 | **Catalogue** | Recherche, PDF, 8 catégories (liste verticale fixe sur ordinateur, pastilles qui défilent sur mobile), bannière de la catégorie, filtres (stérile, usage unique, en stock, hospitalier), grille de cartes | Changement de catégorie animé, cartes en cascade, grille millimétrée au survol. **Aperçu rapide** (fiche technique, normes, conditionnement). **Panier de devis** : « + » sur chaque carte, puis un panneau latéral avec quantités et formulaire **envoyé sur WhatsApp au service commercial** |
| 4 | **Pourquoi nous** | Fond encre. 5 engagements numérotés | Défilement piloté : à gauche, la photo et le grand numéro safran changent avec l'engagement actif à droite. Un trait safran se dessine sur l'élément actif |
| 5 | **Chiffres** | 4 chiffres en grand + témoignage | Compteurs animés à l'apparition. ⚠ **Chiffres et témoignage à faire valider par le client** |
| 6 | **Contact** | 3 numéros en grandes cartes cliquables (`tel:`), le commercial mis en avant ; adresse + itinéraire ; carte Google | Carte en niveaux de gris, en couleur au survol ; indicateur « ouvert » animé |
| 7 | **Footer** | Signature, catégories, coordonnées, mentions légales (RC/NIF à compléter) | — |
| ∞ | **Contact rapide** | Ordinateur : boutons WhatsApp + appel flottants. Mobile : barre fixe *Appeler · WhatsApp · Devis* | Halo qui pulse sur WhatsApp ; info-bulle au survol |

**Accessibilité :** texte `#0C1A22` sur `#F6F4F0` (≈ 16:1), céladon sur blanc (≈ 5,9:1, conforme AA). Le safran n'est utilisé que sur fond encre ou en décor. Lien d'évitement, focus visible, `aria-*` sur les onglets et les filtres, `<dialog>` natif, `prefers-reduced-motion` respecté (la loupe devient fixe, pas de défilement automatique).

---

## 3. Style photographique

- **Lumière :** une seule source douce et latérale (fenêtre ou softbox à 45°), ombres longues et légères. Pas de flash frontal ni d'éclairage clinique blanc et plat.
- **Palette :** fonds porcelaine et gris chaud ; accents céladon (blouse, plateau, carton) ; une touche safran par image au maximum (étiquette, bouchon, gilet).
- **Cadrage :** composition décentrée, beaucoup d'espace négatif (pour le texte), gros plans de matière (trame de gaze, nitrile, verre).
- **Profondeur de champ :** courte pour les détails (f/2–2.8), moyenne pour les lieux (f/5.6).
- **Traitement :** légèrement désaturé, noirs relevés (teinte encre plutôt que noir pur), grain fin, balance des blancs neutre à légèrement chaude. Pas de « teal & orange » appuyé.
- **Personnes :** vrais métiers, vrais gestes (vérifier un lot, préparer une commande, conseiller). Tenues professionnelles locales, diversité naturelle (hommes, femmes, femmes voilées ou non), regards rarement face caméra, **jamais de pose « pouce levé » ni de sourire de banque d'images**.
- **À bannir :** stéthoscope autour du cou, croix verte, molécules 3D, poignées de main, écrans holographiques.

---

## 4. Liste des images & prompts

Suffixe commun à ajouter à chaque prompt (style) :
`editorial medical photography, soft directional window light, warm porcelain and deep ink palette with celadon green accents, muted desaturated grade, lifted blacks, fine film grain, shallow depth of field, calm precise atmosphere, photorealistic`

**Negative prompt** commun :
`text, letters, logo, watermark, brand names, deformed hands, extra fingers, distorted faces, stock photo look, cheesy smile, thumbs up, stethoscope cliché, green cross, red cross, neon, holograms, oversaturated, harsh flash, plastic skin, cluttered background`

(Midjourney : ajouter `--style raw --v 7`, et le negative via `--no …`. Flux / DALL·E : décrire le negative en phrase « no text, no logos… ».)

### HERO

**IMG-01a/b/c — Rendus produits pour la loupe (optionnel)** · 1:1, 1600×1300 px, PNG/WebP avec transparence
La loupe affiche aujourd'hui des illustrations vectorielles. Pour plus de réalisme, on peut les remplacer par des rendus alignés exactement sur le plan.
> `Exploded view of a three-piece medical syringe floating in mid-air, plunger, transparent graduated barrel, orange needle hub and needle cap separated along one diagonal axis, studio product render, seamless warm off-white background #F6F4F0, soft top-left light, subtle contact shadows, ultra sharp, centered, isolated` `--ar 16:13`
> Variantes : *fingertip pulse oximeter, top shell lifted, spring and bottom shell separated vertically, deep green shell, small OLED screen* / *glass injection vial, flip-off cap, aluminium crimp and rubber stopper floating above in a vertical exploded stack*

### À PROPOS

**IMG-02 — Contrôle des lots en entrepôt** · 4:5, 1200×1500
Sujet : une préparatrice en blouse céladon vérifie un numéro de lot sur un carton, entre deux rayonnages. Composition : sujet au tiers droit, allée qui fuit en profondeur. Émotion : rigueur calme.
> `A young Algerian woman warehouse pharmacist in a celadon green work coat checking a lot number label on a cardboard box with a handheld scanner, between tall clean shelving with medical supply boxes, Algerian distribution warehouse, subject on right third, aisle receding into soft focus, 50mm lens f/2.8, [suffixe]` `--ar 4:5`

**IMG-03 — Étiquette de lot, macro** · 1:1, 1000×1000
> `Extreme macro of a sterile medical packaging label with lot number and expiry date printed, embossed paper texture, one fingertip in nitrile glove touching the edge, raking side light revealing texture, 100mm macro lens f/4, [suffixe]` `--ar 1:1`

### CATALOGUE — Bannières de catégories (IMG-04-0 à 04-8) · 21:9, 2100×900 (recadrage 16:9 sur mobile)
Principe : **nature morte** sur fond porcelaine, objets alignés comme sur une table d'instruments, vue de dessus ou à 30°, beaucoup d'espace vide à gauche pour le titre.
> Gabarit : `Minimalist flat-lay still life of [OBJETS], arranged with precise spacing on a warm off-white matte surface, one celadon green tray, long soft shadows from the left, generous negative space on the left side, top-down view, 35mm, [suffixe]` `--ar 21:9`

| ID | Catégorie | [OBJETS] |
|---|---|---|
| 04-0 | Toutes | `a syringe, a roll of gauze, a pulse oximeter, a blood collection tube, a folded surgical mask` |
| 04-1 | Injection & perfusion | `syringes of three sizes, IV catheters with colored hubs, a coiled infusion line` |
| 04-2 | Diagnostic | `a digital blood pressure monitor, a pulse oximeter, an infrared thermometer, a glucometer` |
| 04-3 | Pansements | `sterile gauze swabs, hydrocolloid dressings, an elastic crepe bandage roll, medical tape` |
| 04-4 | Protection | `a box of nitrile gloves with one glove draped, surgical masks, a folded non-woven gown, a pump bottle` |
| 04-5 | Respiratoire | `an oxygen mask with reservoir bag, nasal cannula coiled, a nebulizer mask` |
| 04-6 | Orthopédie | `a cervical collar, a wrist splint, an aluminium crutch tip, elastic support bands` |
| 04-7 | Laboratoire | `vacuum blood collection tubes with colored caps in a rack, sterile urine containers, microscope slides` |
| 04-8 | Équipement | *Pas en vue de dessus :* `a modern hospital bed and folding wheelchair in a bright minimal room with porcelain walls, side light, wide 24mm` |

### CATALOGUE — Packshots produits (IMG-05-[RÉF]) · 1:1, 1200×1200
Règle de cohérence : **même fond `#F6F4F0`, même angle (3/4 face, caméra légèrement plongeante à 15°), même lumière en haut à gauche, ombre portée douce en bas à droite, produit occupant 60 % du cadre.**
> `Professional e-commerce packshot of [PRODUCT], three-quarter view, slightly elevated camera, centered, occupying 60% of frame, seamless warm off-white background #F6F4F0, soft key light from top-left, gentle diffused contact shadow bottom-right, crisp detail, no props` `--ar 1:1`

### POURQUOI NOUS (IMG-06-1 à 06-5) · 4:5, 1000×1250. Rendu plus sombre, car il s'affiche sur fond encre
| ID | Sujet | Prompt |
|---|---|---|
| 06-1 Qualité | Inspection d'un lot sous lumière | `Close-up of gloved hands holding a sealed sterile syringe pack against a bright lightbox to inspect it, dark ink-blue surroundings, rim light, low-key, 85mm f/2, [suffixe]` |
| 06-2 Conformité | Dossier & marquage | `A neat stack of technical documentation folders and a product box with a regulatory label, a fountain pen, on a dark desk, single warm desk lamp, low-key editorial, [suffixe]` |
| 06-3 Disponibilité | Rayonnages | `Symmetrical perspective of tall warehouse shelving filled with identical white and celadon medical boxes, dim ambient light with one warm aisle light, low-key, 24mm, [suffixe]` |
| 06-4 Livraison | Livraison devant une officine | `A delivery man in a dark work jacket handing a sealed carton to an Algerian pharmacist at the door of a small pharmacy at dusk, warm shop light spilling out, North African street, 35mm f/2, candid, [suffixe]` |
| 06-5 Accompagnement | Conseiller & pharmacienne | `An Algerian sales advisor and a female pharmacist in a hijab reviewing a product catalogue together at a pharmacy counter, genuine conversation, not looking at camera, warm low-key light, 50mm, [suffixe]` |

### CHIFFRES

**IMG-07 — Texture de fond (optionnel)** · 16:9, 1920×1080, très légère (< 80 Ko)
> `Abstract extreme macro of woven cotton gauze fibers, monochrome celadon green tint, very soft focus, low contrast, seamless texture` `--ar 16:9 --tile`

**IMG-11 — Portrait témoignage** · 1:1, 400×400 (recadrage rond)
> `Natural portrait of an Algerian female pharmacist in her 40s in a white coat, standing in her pharmacy, soft window light, gentle confident expression, not smiling broadly, shallow depth of field, [suffixe]` `--ar 1:1`
⚠ Pour un vrai témoignage, utiliser une **vraie photo de la vraie cliente** (avec son accord écrit), jamais une image générée.

### CONTACT & DIVERS
- **IMG-08 — Façade / entrée :** **photo réelle uniquement** (voir §5). Ne jamais générer la façade de l'entreprise.
- **IMG-09 — Textures :** grille plan et grain déjà faits en CSS, aucune image nécessaire.
- **IMG-10 — Image de partage (Open Graph)** · 1200×630 : fond encre, plan de la seringue (capture du hero) avec le logo, 2 couleurs maximum.

---

## 5. Alternatives réalistes : shooting sur place au smartphone

À privilégier pour IMG-02, 03, 06-3, 06-4, 06-5, 08 et 11, car l'authenticité vaut plus qu'une image générée.

**Liste de prises de vue (une demi-journée suffit) :**
1. **Entrepôt :** une allée en perspective (téléphone à hauteur de poitrine, bien droit) ; une personne scannant un carton ; des cartons céladon et blancs alignés.
2. **Produits :** packshots sur un carton blanc courbé en « vague » (voir l'astuce ci-dessous).
3. **Équipe :** 3 à 4 personnes **en action** (préparer, étiqueter, appeler), puis un portrait chacun près d'une fenêtre.
4. **Livraison :** véhicule chargé devant l'entrepôt ; remise d'un carton à une pharmacie partenaire de Sidi Bel Abbès (avec accord). Idéalement en fin d'après-midi, vers 17 h.
5. **Façade :** l'entrée et l'enseigne, vers 9 h ou 16 h pour éviter le soleil de midi.

**Conseils smartphone :**
- Nettoyer l'objectif. Utiliser l'**objectif ×2** (portraits et détails) plutôt que le grand-angle, qui déforme.
- **Lumière de fenêtre de côté**, lumières néon éteintes si possible. Jamais de flash.
- Taper sur le sujet puis **baisser l'exposition** d'un cran pour garder les blancs détaillés.
- Mode Portrait pour les personnes, mais avec un flou modéré (f/4 simulé).
- Format : 4:3 natif, recadrage ensuite. Activer la grille et placer le sujet sur un tiers.
- **Packshots maison :** une feuille de papier blanc A2 courbée contre un mur près d'une fenêtre, un carton blanc en face pour déboucher les ombres, téléphone sur un trépied ou une pile de livres, même angle pour tous les produits. Détourage avec l'outil intégré de l'iPhone ou Android, Photoroom ou remove.bg, puis réinsertion sur fond `#F6F4F0` avec une ombre douce (même réglage pour tous).
- **Retouche cohérente :** créer un préréglage Lightroom Mobile (gratuit) : exposition +0,2 ; hautes lumières −30 ; noirs +15 ; saturation −15 ; teinte des verts vers le céladon ; grain 10. L'appliquer à **toutes** les photos.
- **Consentement :** autorisation écrite pour chaque personne photographiée. Flouter les noms de patients ou d'établissements visibles.

---

## 6. Visuels 3D & illustrations

- **Système de pictogrammes :** trait de 1,5 px, angles arrondis, grille 24 px (déjà intégré pour les 8 catégories). À étendre aux fiches produits s'il manque des photos.
- **Plans techniques :** la grammaire du hero (cotes en pointillé safran, étiquettes en mono) peut servir aux fiches produits PDF et aux réseaux sociaux.
- **3D (étape suivante) :** modéliser 3 produits phares (seringue, oxymètre, flacon) dans Blender ou Spline, exporter en GLB (< 1,5 Mo) et remplacer la couche « réel » du hero par une scène Three.js en rotation, avec un matériau verre réaliste.
- **Vidéo courte :** une boucle de 6 s de la vue éclatée de la seringue (réalisable à partir du hero) pour Instagram et LinkedIn.

---

## 7. Optimisation & textes alternatifs

**Formats & poids :**
| Usage | Format | Dimensions | Poids max |
|---|---|---|---|
| Bannières 21:9 | AVIF + WebP de secours | 2100 px (et 1050 px en `srcset`) | 180 Ko |
| Photos 4:5 | AVIF + WebP | 1200 px / 600 px | 140 Ko |
| Packshots 1:1 | WebP (transparence si besoin) | 1200 / 600 px | 80 Ko |
| Portrait | WebP | 400 px | 30 Ko |
| Open Graph | JPG | 1200×630 | 200 Ko |

- Conversion : [squoosh.app](https://squoosh.app) (AVIF qualité 50, WebP qualité 75).
- Toujours renseigner `width` / `height` (évite les décalages de mise en page), `loading="lazy"` sous la ligne de flottaison, et `fetchpriority="high"` sur une éventuelle image du hero.
- Exemple d'intégration (remplace un bloc `<figure class="ph">`) :
```html
<figure class="ph ph--4x5">
  <picture>
    <source srcset="images/img-02-600.avif 600w, images/img-02-1200.avif 1200w" type="image/avif">
    <img src="images/img-02-1200.webp" srcset="images/img-02-600.webp 600w, images/img-02-1200.webp 1200w"
         sizes="(max-width: 860px) 100vw, 40vw" width="1200" height="1500" loading="lazy"
         alt="Préparatrice vérifiant un numéro de lot dans l'entrepôt NASOURAI PHARM"
         data-alt-ar="موظفة تتحقق من رقم الدفعة في مستودع نصوراي فارم">
  </picture>
</figure>
```

**Textes alternatifs FR / AR :**
| ID | FR | AR |
|---|---|---|
| IMG-02 | Préparatrice vérifiant un numéro de lot dans l'entrepôt NASOURAI PHARM | موظفة تتحقق من رقم الدفعة في مستودع نصوراي فارم |
| IMG-03 | Gros plan sur une étiquette de lot et de date de péremption | صورة مقرّبة لملصق رقم الدفعة وتاريخ انتهاء الصلاحية |
| IMG-04-1 | Seringues, cathéters et perfuseur alignés sur un plateau | حقن وقسطرات وجهاز تسريب مصفوفة على صينية |
| IMG-04-2 | Tensiomètre, oxymètre, thermomètre et glucomètre | جهاز ضغط الدم ومقياس التأكسج وميزان الحرارة وجهاز قياس السكر |
| IMG-04-3 | Compresses, pansements et bande élastique | كمادات وضمادات ورباط مطاطي |
| IMG-04-4 | Gants nitrile, masques chirurgicaux et blouse de protection | قفازات نتريل وكمامات جراحية ومئزر واقٍ |
| IMG-04-5 | Masque à oxygène et canule nasale | قناع أكسجين وقنية أنفية |
| IMG-04-6 | Minerve, attelle de poignet et béquille | طوق رقبة وجبيرة معصم وعكاز |
| IMG-04-7 | Tubes de prélèvement à bouchons colorés et pots stériles | أنابيب سحب الدم بسدادات ملونة وعلب معقمة |
| IMG-04-8 | Lit médicalisé et fauteuil roulant | سرير طبي وكرسي متحرك |
| IMG-06-1 | Mains gantées inspectant un sachet de seringue stérile | أيدٍ بقفازات تفحص كيس حقنة معقمة |
| IMG-06-2 | Dossiers de documentation technique et étiquette réglementaire | ملفات التوثيق التقني وملصق المطابقة |
| IMG-06-3 | Rayonnages de l'entrepôt remplis de dispositifs médicaux | رفوف المستودع مملوءة بالمستلزمات الطبية |
| IMG-06-4 | Livreur remettant un carton à une pharmacienne | عامل توصيل يسلّم كرتونة لصيدلانية |
| IMG-06-5 | Conseiller commercial et pharmacienne consultant le catalogue | مستشار تجاري وصيدلانية يتصفحان الكتالوج |
| IMG-08 | Entrée de NASOURAI PHARM, route Tessala, Sidi Bel Abbès | مدخل نصوراي فارم، طريق تسالة، سيدي بلعباس |
| Packshot | « [Nom du produit], vue de trois quarts sur fond clair » | « [اسم المنتج]، منظر جانبي على خلفية فاتحة » |

L'attribut `data-alt-ar` est déjà géré : le script échange automatiquement les `alt` au changement de langue.

---

## 8. À valider avec le client avant la mise en ligne

- [ ] Chiffres clés (1 200+, 350+, 48 h, 12 wilayas) et témoignage : **ce sont des exemples**
- [ ] Liste réelle des produits → `js/catalog.js` (structure simple, bilingue)
- [ ] Les numéros 0563 02 27 80 / 81 sont-ils sur WhatsApp ? (le formulaire de devis envoie au **…81**, les boutons flottants au **…80**)
- [ ] Horaires (actuellement dim.–jeu., 8h–17h), RC / NIF / NIS dans le footer
- [ ] Position exacte sur Google Maps (remplacer la recherche par les coordonnées GPS)
- [ ] Lien du catalogue PDF
- [ ] Traduction arabe : relecture par un locuteur natif
