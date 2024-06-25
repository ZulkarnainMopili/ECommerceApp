// product.js

const express = require('express');
const router = express.Router();

// Array to simulate a database
let products = [];

// Helper function to find a product by ID
const findProductById = (id) => {
    return products.find(product => product.id === id);
};

// GET all products
router.get('/', (req, res) => {
    res.json(products);
});

// GET a product by ID
router.get('/:id', (req, res) => {
    const product = findProductById(req.params.id);
    if (!product) {
        return res.status(404).send('Product not found');
    }
    res.json(product);
});

// CREATE a new product
router.post('/', (req, res) => {
    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// UPDATE a product by ID
router.put('/:id', (req, res) => {
    const product = findProductById(req.params.id);
    if (!product) {
        return res.status(404).send('Product not found');
    }
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    product.category = req.body.category || product.category;
    res.json(product);
});

// DELETE a product by ID
router.delete('/:id', (req, res) => {
    const productIndex = products.findIndex(product => product.id === req.params.id);
    if (productIndex === -1) {
        return res.status(404).send('Product not found');
    }
    products.splice(productIndex, 1);
    res.status(204).send();
});

module.exports = router;

