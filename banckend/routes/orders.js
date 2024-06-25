const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Mengimpor model Order
const Product = require('../models/Product'); // Mengimpor model Product

// Mendapatkan semua pesanan
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('products.product');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Mendapatkan satu pesanan berdasarkan ID
router.get('/:id', getOrder, (req, res) => {
    res.json(res.order);
});

// Membuat pesanan baru
router.post('/', async (req, res) => {
    const { customerName, products } = req.body;

    const order = new Order({
        customerName,
        products
    });

    try {
        const newOrder = await order.save();

        // Mengurangi stok produk yang dipesan
        for (const item of products) {
            const product = await Product.findById(item.product);
            if (product) {
                product.stock -= item.quantity;
                await product.save();
            }
        }

        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware untuk mendapatkan pesanan berdasarkan ID
async function getOrder(req, res, next) {
    let order;
    try {
        order = await Order.findById(req.params.id).populate('products.product');
        if (order == null) {
            return res.status(404).json({ message: 'Cannot find order' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.order = order;
    next();
}

module.exports = router;

