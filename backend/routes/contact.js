const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: Envoyer un mail à un artisan
 */

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Envoie un mail à un artisan
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               artisanEmail:
 *                 type: string
 *               clientName:
 *                 type: string
 *               clientEmail:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mail envoyé avec succès
 */

router.post('/', async (req, res) => {
    const { artisanEmail, clientName, clientEmail, message } = req.body;

    if (!artisanEmail || !clientName || !clientEmail || !message)
    return res.status(400).json({ error: "Tous les champs sont requis." });

    try {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: clientEmail,
        to: artisanEmail,
        subject: `Contact depuis l'annuaire - ${clientName}`,
        text: message,
        html: `<p>${message}</p><p>De : ${clientName} (${clientEmail})</p>`
    });

    res.json({ success: true, message: "Email envoyé !" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Erreur lors de l'envoi du mail" });
    }
});

module.exports = router;
