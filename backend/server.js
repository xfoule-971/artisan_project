const express = require('express');
const cors = require('cors');

const artisansRoutes = require('./routes/artisans');
const categoriesRoutes = require('./routes/categories');
const contactRoutes = require('./routes/contact');

const app = express();
app.use(cors());
app.use(express.json());

// images statiques
app.use('/uploads', express.static('uploads'));

// routes
app.use('/api/artisans', artisansRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/contact', contactRoutes);

// swagger
require('./swagger')(app);

app.listen(4000, () => console.log('API lue sur le port 4000'));
