const express = require('express');
const router = express.Router();
const pool = require('../db');

/**
 * @swagger
 * tags:
 *   name: Catégories
 *   description: Routes pour gérer les catégories
 */

// Récupérer toutes les catégories
router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM categories");
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});


/**
 * @swagger
 * /api/categories/top:
 *   get:
 *     summary: Récupère les 3 artisans du mois
 *     tags: [Catégories]
 *     responses:
 *       200:
 *         description: Liste des 3 artisans du mois
 */
// Route artisan du mois
router.get('/top', async (req, res) => {
try {
    const sql = `
        SELECT image, nom, note, specialite, ville
        FROM artisans
        WHERE top = 1
        ORDER BY note DESC
    `;
    const [results] = await pool.query(sql);
    res.json(results);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
}
});

/**
 * @swagger
 * /api/categories/batiment:
 *   get:
 *     summary: Récupère les artisans dans la catégorie bâtiment
 *     tags: [Catégories]
 *     responses:
 *       200:
 *         description: Liste des artisans dans la catégorie bâtiment
 */
// Route Bâtiment
router.get('/batiment', async (req, res) => {
    try {
        const sql = `
            SELECT image, nom, note, specialite, ville, apropos, email, siteweb 
            FROM artisans 
            WHERE categorie = 'Bâtiment'
        `;
        const [results] = await pool.query(sql);
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

/**
 * @swagger
 * /api/categories/services:
 *   get:
 *     summary: Récupère les artisans dans la catégorie services
 *     tags: [Catégories]
 *     responses:
 *       200:
 *         description: Liste des artisans dans la catégorie services
 */
// Route Services
router.get('/services', async (req, res) => {
    try {
        const sql = `
            SELECT image, nom, note, specialite, ville, apropos, email, siteweb 
            FROM artisans 
            WHERE categorie = 'Services'
        `;
        const [results] = await pool.query(sql);
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

/**
 * @swagger
 * /api/categories/fabrication:
 *   get:
 *     summary: Récupère les artisans dans la catégorie fabrication
 *     tags: [Catégories]
 *     responses:
 *       200:
 *         description: Liste des artisans dans la catégorie fabrication
 */
// Route Fabrication
router.get('/fabrication', async (req, res) => {
    try {
        const sql = `
            SELECT image, nom, note, specialite, ville, apropos, email, siteweb 
            FROM artisans 
            WHERE categorie = 'Fabrication'
        `;
        const [results] = await pool.query(sql);
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

/**
 * @swagger
 * /api/categories/alimentation:
 *   get:
 *     summary: Récupère les artisans dans la catégorie alimentation
 *     tags: [Catégories]
 *     responses:
 *       200:
 *         description: Liste des artisans dans la catégorie alimentation
 */
// Route Alimentation
router.get('/alimentation', async (req, res) => {
    try {
        const sql = `
            SELECT image, nom, note, specialite, ville, apropos, email, siteweb 
            FROM artisans 
            WHERE categorie = 'Alimentation'
        `;
        const [results] = await pool.query(sql);
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

module.exports = router;
