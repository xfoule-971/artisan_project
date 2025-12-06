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
 *     summary: Récupère un artisan par son id
 *     tags: [Artisans]
 *     responses:
 *       200:
 *         description: artisan demandé
 */

// Récupérer un artisan par son id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM artisans WHERE id = ?",
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Artisan non trouvé" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
