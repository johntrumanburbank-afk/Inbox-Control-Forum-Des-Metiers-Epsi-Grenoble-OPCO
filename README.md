<div align="center">

```
 ___ _   _ ____   _____  __   ____ ___  _   _ _____ ____   ___  _
|_ _| \ | | __ ) / _ \ \/ /  / ___/ _ \| \ | |_   _|  _ \ / _ \| |
 | ||  \| |  _ \| | | \  /  | |  | | | |  \| | | | | |_) | | | | |
 | || |\  | |_) | |_| /  \  | |__| |_| | |\  | | | |  _ <| |_| | |___
|___|_| \_|____/ \___/_/\_\  \____\___/|_| \_| |_| |_| \_\\___/|_____|
```

### Employé n° 047 — Consolidated Business Systems, 1997

**Un serious game satirique pour apprendre à ne pas cliquer.**
*Triez votre boîte mail, inspectez les expéditeurs, résistez à la hiérarchie — et survivez à la « famille CBS ».*

![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-5-433E38?style=for-the-badge)
![Tests](https://img.shields.io/badge/tests-29%20passing-6C785A?style=for-the-badge)
![Hors ligne](https://img.shields.io/badge/100%25-local%20%26%20hors%20ligne-A14D42?style=for-the-badge)

![Menu principal d'INBOX CONTROL](docs/screenshots/01-menu.png)

[Jouer](#-jouer) · [Le jeu](#-le-jeu) · [Captures](#-captures) · [Contenu](#-contenu) · [Pédagogie](#-pédagogie) · [Architecture](#-architecture) · [Contribuer](#-ajouter-du-contenu) · [Crédits](#-crédits)

</div>

---

## Le pitch

> *« Le service informatique ne vous demandera jamais votre mot de passe. »* — Sylvie, chaque semaine.

Mars 1997. Vous êtes l'**employé n° 047** du service administratif de *Consolidated Business Systems*, multinationale fictive, bureaucratique et très attachée à son organigramme. Votre mission : traiter votre courrier électronique, atteindre vos objectifs de productivité… et reconnaître les **tentatives de phishing**, les faux emails de PDG et les pièces jointes douteuses, sans qu'aucun message ne soit jamais étiqueté « fraude » à votre place.

Chaque message est une décision. Chaque décision a une conséquence, et un bilan pédagogique en fin de journée.

| | |
| --- | --- |
| **Genre** | Serious game narratif, simulation de bureau, prise de décision |
| **Ton** | Humour noir, satire du monde du travail, nostalgie informatique des années 90 |
| **Public** | Employés, étudiants, sessions de sensibilisation, salons et forums |
| **Durée** | Une journée = 5 à 8 minutes (configurable), sans limite en mode entraînement |
| **Langue** | Français |
| **Plateforme** | Navigateur de bureau, souris. Lancement local sous Windows, macOS et Linux |

---

## Jouer

### Windows (le plus simple)

1. Installez [Node.js LTS](https://nodejs.org) (version 18 ou plus).
2. Téléchargez ou clonez le dépôt.
3. Double-cliquez sur **`JOUER-WINDOWS.bat`**.

Au premier lancement, le script installe les dépendances et compile le jeu. Il ouvre ensuite <http://localhost:4173/>.

### Ligne de commande (tous systèmes)

```bash
git clone https://github.com/<votre-compte>/inbox-control.git
cd inbox-control
npm install
npm run play          # compile puis sert le jeu sur http://localhost:4173
```

Pour développer avec rechargement à chaud : `npm run dev` (<http://localhost:5173>).

> Le fichier `index.html` ne peut pas être ouvert par double-clic : les navigateurs bloquent les modules en `file://`. Utilisez le lanceur ci-dessus.

### Installation sur un salon ou une borne

* Lancez le jeu, puis **F11** pour le plein écran. Le format 16:9 est conçu pour un écran de bureau.
* Le bouton **Cinématique** du menu rejoue la lettre d'embauche et l'arrivée au bureau. Il n'affecte ni la sauvegarde ni la campagne, donc il est idéal pour attirer l'œil.
* Le mode **Entraînement** (sans chronomètre) convient aux visiteurs qui découvrent le jeu. Le mode **Défi** convient aux joueurs pressés.
* Rien n'est envoyé sur le réseau : aucune connexion n'est nécessaire une fois le jeu compilé.

---

## Le jeu

### Une boucle de travail complète

```
Briefing  →  Bureau  →  Messagerie CBS MAIL 3.1  →  Décision  →  Bilan de fin de journée
```

1. **Le bureau** : vue frontale, entièrement cliquable. Écran CRT, téléphone, calendrier, manuel de sécurité, bloc-notes, corbeille, tampon, dossier personnel, imprimante, machine à café, classeurs et horloge.
2. **La messagerie** : liste des messages, adresse complète de l'expéditeur, objet, date, corps, liens et pièces jointes simulés.
3. **L'enquête** : chaque vérification consomme du temps de journée mais réduit l'incertitude.
4. **La décision** : répondre, signaler, supprimer, exécuter, ignorer.
5. **Le bilan** : ce que vous avez bien fait, ce que vous avez raté, pourquoi, et la procédure recommandée.

### Les outils d'enquête

| Outil | Ce qu'il révèle |
| --- | --- |
| **Inspecter** | En-têtes simplifiés, adresse réelle, domaine, destination réelle des liens au survol, nature des pièces jointes |
| **Vérifier** | Annuaire CBS et canal officiel (vérification hors bande) |
| **Manuel** | Règlement SI-97 : 13 articles de procédure |
| **Sylvie** | L'avis, cynique et débordé, du service informatique (poste 4112) |

### Quatre jauges, de 0 à 100

| Jauge | Ce qu'elle mesure |
| --- | --- |
| **Sécurité** | Votre résistance aux fraudes et le respect des procédures |
| **Productivité** | Le volume de messages traités face à l'objectif du jour |
| **Confiance** | Le jugement de la direction sur votre travail |
| **Stress** | Le prix mental de la journée, et un levier sur les événements |

> **Règle d'or du jeu :** une pratique dangereuse n'est jamais récompensée, même quand elle vient d'un supérieur. Le bilan sépare toujours la *pression managériale* de la *bonne pratique*.

### Pas de faux raccourcis

* Aucun message n'est signalé comme frauduleux à votre place.
* Les phishings sont parfois **crédibles** et soignés ; les messages légitimes sont parfois **maladroits**. L'orthographe ne suffit pas.
* Tout est simulé localement : liens, pièces jointes, réponses. Rien ne quitte le jeu.

### Les fins

Six fins selon vos choix : employé modèle, expert en cybersécurité, licenciement pour manque de productivité, compromission majeure, lanceur d'alerte, et promotion absurde au service informatique.

---

## Captures

| | |
| --- | --- |
| ![Lettre d'embauche](docs/screenshots/02-lettre.png) | ![Bureau interactif](docs/screenshots/03-bureau.png) |
| **La lettre d'embauche** — la cinématique d'ouverture, rejouable depuis le menu | **Le bureau** — tout est cliquable |
| ![Messagerie](docs/screenshots/04-messagerie.png) | ![Inspection d'un message](docs/screenshots/05-inspection.png) |
| **CBS MAIL 3.1** — la boîte de réception de 1997 | **L'inspection** — adresse, domaine et propriétés du message |
| ![Manuel de sécurité](docs/screenshots/06-manuel.png) | ![Bilan de fin de journée](docs/screenshots/07-bilan.png) |
| **Le manuel SI-97** — les procédures officielles | **Le bilan** — décisions, conséquences et commentaire de la direction |

---

## Contenu

### Campagne

La campagne prévoit **30 journées en 6 chapitres de 5 jours**. Le **chapitre 1** est jouable aujourd'hui.

| Chapitre | Titre | État |
| --- | --- | --- |
| 1 | **Bienvenue dans la famille** (initiation, expéditeurs, premier phishing) | Jouable : 5 jours, 69 emails |
| 2 | Prime exceptionnelle | Structure prête, contenu à écrire |
| 3 | Le PDG a besoin de vous | Structure prête, contenu à écrire |
| 4 | Pièce jointe | Structure prête, contenu à écrire |
| 5 | Semaine de l'audit | Structure prête, contenu à écrire |
| 6 | Le grand secret | Structure prête, contenu à écrire |

### Modes de jeu

* **Campagne** : progression sauvegardée dans le navigateur, reprise possible.
* **Entraînement** : sans chronomètre, sans impact sur la campagne, chaque décision est expliquée.
* **Défi** : points, cadence croissante, trois incidents et c'est fini.
* **Cinématique** : lettre d'embauche et arrivée au bureau, rejouables depuis le menu.
* **Extras** : archives de vos décisions, glossaire à débloquer, 16 réussites humoristiques, export CSV et PDF de votre bilan, strictement local.

### Les personnages

| Personnage | Rôle |
| --- | --- |
| **Bernard** | Comptabilité. Épuisé, vit dans des fichiers Excel |
| **Monique** | Ressources humaines. Polie, mais son règlement est terrifiant |
| **Gérard** | Directeur général. Incompétent numérique, toujours urgent |
| **Sylvie** | Informatique. Débordée et cynique, mais elle a raison |
| **Jean-Michel** | Manager. La productivité avant tout |
| **L'expéditeur inconnu** | Au cœur de l'intrigue |

Leur voix évolue au fil de la campagne.

---

## Pédagogie

Le jeu couvre : phishing classique et ciblé, usurpation de domaine, fraude au président (BEC), pages de connexion piégées, pièces jointes suspectes, ingénierie sociale, fausse urgence, **vérification hors bande** et **signalement à l'informatique**.

Chaque email est une donnée structurée avec un identifiant unique, ses indices, sa difficulté, le comportement attendu, les conséquences de chaque action et une explication pédagogique. Le bilan quotidien détaille, pour chaque décision importante : suspect ou légitime, pourquoi, quels indices, quelle procédure, quelle action était attendue.

Accessibilité : effet CRT, clignotements et animations intenses désactivables ; contraste élevé ; texte agrandi ; durée de journée réglable ; pause à tout moment avec **Échap**.

**Vie privée :** aucun compte, aucun serveur, aucune télémétrie. La sauvegarde est dans le `localStorage` de votre navigateur.

---

## Architecture

Le moteur de jeu est pur (sans UI) et testé ; les scénarios sont des données validées, séparées du code.

```
src/
├── game/        moteur pur : engine, scoring (règles centralisées), endings, modes, types, procedures
├── scenarios/   données de campagne (chapter1/day1..5), registre, validateur
├── characters/  personnages récurrents
├── store/       état central (Zustand)
├── scenes/      écrans React : menu, intro, briefing, bureau, messagerie, bilan, fins…
├── components/  composants d'interface et panneaux
├── assets/      pixel art généré par code : palette, icônes, portraits, scène du bureau
├── audio/       effets et musique en Web Audio API (aucun fichier audio)
├── styles/      CSS pixel art
├── utils/       aléatoire seedé, formatage, exports CSV/PDF
└── tests/       tests Vitest
docs/AUTHORING.md   guide pour écrire de nouveaux jours, chapitres et emails
```

| Brique | Choix |
| --- | --- |
| Interface | React 18 + TypeScript |
| Build | Vite 5 |
| État | Zustand |
| Sauvegarde | `localStorage` versionné |
| Son | Web Audio API (synthèse, aucun fichier) |
| Visuels | Pixel art 2D dessiné par code sur `canvas`, palette imposée |
| Tests | Vitest : scénarios, règles de décision, sauvegarde |

### Direction artistique

Pixel art original inspiré des interfaces DOS et Windows 95 et des bureaux de 1990 ; écrans CRT, bordures épaisses, textures papier discrètes.

| Vert olive | Anthracite | Beige administratif | Gris papier | Rouge d'alerte | Bleu nuit |
| --- | --- | --- | --- | --- | --- |
| `#6C785A` | `#30342F` | `#DDD4B1` | `#B7B396` | `#A14D42` | `#252A36` |

### Commandes

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement (Vite) |
| `npm run build` | Vérification TypeScript + build de production dans `dist/` |
| `npm run play` | Build puis service local sur le port 4173 |
| `npm run serve` | Sert `dist/` sans dépendance (`serve.mjs`) |
| `npm test` | Tests unitaires |
| `npm run validate` | Valide les données de toute la campagne |

---

## Ajouter du contenu

1. Créez `src/scenarios/chapterN/dayX.ts` en suivant [`docs/AUTHORING.md`](docs/AUTHORING.md).
2. Enregistrez la journée dans `src/scenarios/index.ts`.
3. Vérifiez : `npm run validate && npm test`.

Le modèle de données est prêt pour un futur **mode enseignant** : identifiants uniques, nature réelle de chaque message, indices, journal des décisions, exports locaux.

### Pistes

- [ ] Écrire les chapitres 2 à 6 (25 journées)
- [ ] Mode enseignant (tableau de bord local, sans collecte réseau)
- [ ] Éditeur de scénarios
- [ ] Packaging d'une version autonome Windows (`.exe`)

---

## Crédits

**Vibecodé par Ismael BERNARD / Ariya Panyachak — @epsi**

* Tous les visuels sont originaux, dessinés par programme. Les sons et la musique sont synthétisés.
* Polices : [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) et [VT323](https://fonts.google.com/specimen/VT323), sous licence SIL OFL, via `@fontsource`.
* Toutes les entreprises, personnes, adresses, liens et pièces jointes du jeu sont **fictifs**. Aucun contenu dangereux, aucune connexion réseau.
* Le jeu s'inspire très librement de la tension des administrations bureaucratiques de fiction, sans rien emprunter à une œuvre existante.

<div align="center">

*« Déclarer un incident avant qu'il n'arrive : c'est l'article 14. »*

</div>
