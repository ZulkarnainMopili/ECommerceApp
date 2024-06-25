// server.js

const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./product');
const userRoutes = require('./users');

const app = express();

app.use(bodyParser.json());

// Gunakan rute yang telah diatur di product.js dan users.js
app.use('/products', productRoutes);
app.use('/users', userRoutes);

// Tangani rute yang tidak ditemukan
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

// Tangani kesalahan server
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

