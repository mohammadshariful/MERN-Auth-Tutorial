const express = require('express');
const router = express.Router();

// login routes
router.post('/login', (req, res) => {
    res.send('Login route');
});

// signup routes
router.post('/signup', (req, res) => {
    res.send('Login route');
});

module.exports = router;