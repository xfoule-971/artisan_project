const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Test connexion DB
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Base de données connectée !");
    connection.release();
  } catch (err) {
    console.error("Erreur de connexion à la base :", err.message);
  }
})();

module.exports = pool;
