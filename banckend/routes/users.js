// users.js

const express = require('express');
const router = express.Router();

// Array to simulate a database
let users = [];

// Helper function to find a user by ID
const findUserById = (id) => {
    return users.find(user => user.id === id);
};

// GET all users
router.get('/', (req, res) => {
    res.json(users);
});

// GET a user by ID
router.get('/:id', (req, res) => {
    const user = findUserById(req.params.id);
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});

// CREATE a new user
router.post('/', (req, res) => {
    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password, // In real applications, never store passwords as plain text
        address: req.body.address
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// UPDATE a user by ID
router.put('/:id', (req, res) => {
    const user = findUserById(req.params.id);
    if (!user) {
        return res.status(404).send('User not found');
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    user.address = req.body.address || user.address;
    res.json(user);
});

// DELETE a user by ID
router.delete('/:id', (req, res) => {
    const userIndex = users.findIndex(user => user.id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }
    users.splice(userIndex, 1);
    res.status(204).send();
});

module.exports = router;

