const express = require('express');
const router = express.Router();
const pool = require('../db');

/**
 * @swagger
 * tags:
 *   name: Artisans
 *   description: Routes pour gérer les artisans
 */

/**
 * @swagger
 * /api/artisans:
 *   get:
 *     summary: Récupère tous les artisans
 *     tags: [Artisans]
 *     responses:
 *       200:
 *         description: Liste de tous les artisans
 */

// Récupérer tous les artisans
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM artisans");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
