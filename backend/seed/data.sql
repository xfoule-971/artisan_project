SET NAMES utf8mb4;
SET SESSION collation_connection = 'utf8mb4_unicode_ci';

-- 1) Création de la base
CREATE DATABASE IF NOT EXISTS artisans_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
USE artisans_db;

-- 2) Table artisans
CREATE TABLE IF NOT EXISTS artisans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255) NOT NULL,
  specialite VARCHAR(255),
  note DECIMAL(2,1),
  ville VARCHAR(255),
  apropos TEXT,
  email VARCHAR(255),
  siteweb VARCHAR(255),
  categorie VARCHAR(100),
  top TINYINT(1) DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3) Insertions des données (exemples extraits des artisans du mois)
INSERT INTO artisans (nom, specialite, note, ville, apropos, email, siteweb, categorie, top) VALUES
('Au pain chaud', 'Boulanger', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'aupainchaud@hotmail.com', NULL, 'Alimentation', 1),
('Chocolaterie Labbé', 'Chocolatier', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 'Alimentation', 1),
('Orville Salmons', 'Chauffagiste', 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'o-salmons@live.com', NULL, 'Bâtiment', 1);

-- 4) Création de la colonne image (photos des artisans) mise juste après la colonne 'id'
ALTER TABLE artisans
ADD COLUMN image VARCHAR(255) NOT NULL
AFTER id;

-- 5) Insertions des images dans la colonne ci-dessus (avec les artisans du mois)
UPDATE artisans SET image = 'pain-chaud.jpg' WHERE id = 2;
UPDATE artisans SET image = 'chocolaterie.jpg' WHERE id = 3;
UPDATE artisans SET image = 'orville.jpeg' WHERE id = 5;

-- 6) les requêtes par catégories
SELECT 
	'image'
    'nom',
    'note',
    'specialite',
    'ville'
FROM artisans
WHERE top = 1
ORDER BY note DESC;
-- resultat attendu : les 3 artisans du mois dans l'ordre décroissant (avec leurs images, noms, notes, spécialités, et villes)
-- resultat obtenu :
    ('orville.jpg', 'Orville Salmons', 5.0,	'Chauffagiste', 'Evian'),
    ('chocolaterie.jpeg', 'Chocolaterie Labbé', 4.9, 'Chocolatier', 'Lyon'),
    ('pain-chaud.jpg', 'Au pain chaud', 4.8, 'Boulanger', 'Montélimar');

SELECT 
    'nom', 
    'note', 
    'specialite', 
    'ville'
FROM artisans
WHERE categorie = 'Bâtiment'
ORDER BY note DESC;
-- resultat attendu : les artisants dans le bâtiment dans l'ordre décroissant (avec leurs noms, notes, spécialités et villes)
-- resultat obtenu : 
    ('Orville Salmons', 5.0, 'Chauffagiste', 'Evian'),	
    ('Boutot & fils', 4.7, 'Menuisier', 'Bourg-en-bresse'),	
    ('Mont Blanc Electricité', 4.5,	'Electricien', 'Chamonix'),	
    ('Vallis Bellemare', 4.0, 'Pomblier', 'Vienne');	

SELECT 
    'nom', 
    'note', 
    'specialite', 
    'ville'
FROM artisans
WHERE categorie = 'Services'
ORDER BY note DESC;
-- resultat attendu : les artisans dans le domaine du service dans l'ordre décroissant (avec leurs noms, notes, spécialités et villes)
-- resultat obtenu :
    ('Le monde des fleurs', 4.6, 'Fleuriste', 'Annonay'),	
    ('Valérie Laderoute', 4.5, 'Toiletteur', 'Valence'),
    ('CM Graphisme', 4.4, 'Webdesign', 'Valence'),	
    ("C'est sup'hair", 4.1, 'Coiffeur', 'Romans-sur-Isère'),	
    ('Royden Charbonneau', 3.8, 'Coiffeur', 'Saint-Priest'),	
    ('Leala Dennis', 3.8, 'Coiffeur', 'Chambéry');	

SELECT 
    'nom', 
    'note', 
    'specialite', 
    'ville'
FROM artisans
WHERE categorie = 'Fabrication'
ORDER BY note DESC;
-- resultat attendu : les artisans dans le domaine de la fabrication dans l'ordre décroissant (avec leurs noms, notes, spécialités et villes)
-- resultat obtenu :
    ('Ernest Carignan', 5.0, 'Ferronier', 'Le Puy-en-Velay'),	
    ('Amitee Lécuyer', 4.5, 'Couturier', 'Annecy'),	
    ('Claude Quinn', 4.2, 'Bijoutier', 'Aix-les-bains');

SELECT 
    'nom', 
    'note', 
    'specialite', 
    'ville'
FROM artisans
WHERE categorie = 'Alimentation'
ORDER BY note DESC;
-- resultat attendu : les artisans dans le domaine de l'alimentation dans l'ordre décroissant (avec leurs noms, notes, spécialités et villes)
-- resultat obtenu :
    ('Chocolaterie Labbé', 4.9, 'Chocolatier', 'Lyon'),	
    ('Au pain chaud', 4.8, 'Boulanger', 'Montélimar'),	
    ('Boucherie Dumont', 4.5, 'Boucher', 'Lyon'),	
    ('Traiteur Truchon', 4.1, 'Traiteur', 'Lyon');	