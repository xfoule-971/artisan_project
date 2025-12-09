# Annuaire-Artisans

## Description

Annuaire des artisans avec une base de données MySQL (`artisans_db`).
La table `artisans` contient les colonnes : `id`, `image`, `nom`, `note`, `specialite`, `apropos`, `email`, `siteweb`, `categorie`, `top`.
Ce projet comprend un **backend Node.js/Express** et un **frontend React**.

---

## Technologies utilisées

### Backend

* Node.js
* Express
* MySQL2
* CORS
* dotenv
* Nodemailer
* Swagger
* Nodemon (pour le développement)

### Frontend

* React
* React Router DOM
* Sass
* bootstrap
* Fetch
* Helmet
* FontAwesome (icônes)

---

## Structure du projet

```
Annuaire-Artisans/
├─ backend/
│  ├─ node_modules/
│  ├─ routes/
│  │  ├─ artisans.js
│  │  ├─ categories.js
│  │  └─ contact.js
│  ├─ seed/
│  │  └─ data.sql
│  ├─ uploads/
│  ├─ .env
│  ├─ db.js
│  ├─ server.js
│  ├─ swagger.js
│  └─ package.json
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ assets/
│  │  └─ index.js
│  ├─ public/
│  └─ package.json
└─ README.md
```

---

## Configuration du backend

Créer un fichier `.env` dans `backend/` avec ces variables :

```
DB_HOST='localhost'
DB_USER='' (donnée dans .env)
DB_PASSWORD='' (donnée dans .env)
DB_NAME='artisans_db'

EMAIL_USER='votreEmail@gmail.com'
EMAIL_PASS='motDePasseAppGoogle'
```

Installer les dépendances et lancer le serveur :

```bash
cd backend
npm install
npm dev
```

Le serveur écoute par défaut sur `http://localhost:4000`.

---

## Base de données MySQL

* Le fichier `backend/seed/data.sql` contient :

  * La création de la base `artisans_db`
  * La création de la table `artisans`
  * L’ajout de la colonne `image`
  * L’insertion de données exemples

* Pour exécuter le script :

```bash
mysql -u auvergne -p < backend/seed/data.sql
```

---

## Frontend

Installer les dépendances et lancer le frontend :

```bash
cd frontend
npm install
npm start
```

Le projet s’ouvre généralement sur `http://localhost:3000`.

---

## Fonctionnalités principales

* Affichage des artisans avec notes et spécialités
* Filtrage par catégorie (`Bâtiment`, `Services`, `Fabrication`, `Alimentation`)
* Artisan du mois (`top = 1`)
* Page détail artisan avec localisation Google Maps et site web
* Formulaire contact utilisant Nodemailer

---

## Requêtes SQL utiles

* Top artisans :

```sql
SELECT image, nom, note, specialite, ville
FROM artisans
WHERE top = 1
ORDER BY note DESC;
```

* Artisans par catégorie (exemple : Bâtiment) :

```sql
SELECT nom, note, specialite, ville
FROM artisans
WHERE categorie = 'Bâtiment'
ORDER BY note DESC;
```

---

## Contact

Pour toute question ou contribution :
Email : [x.foule@gmail.com](mailto:x.foule@gmail.com)



