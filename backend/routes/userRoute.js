const express = require('express');
const { login, signup } = require('../controllers/userController');

const router = express.Router();

// * LOGIN
router.post('/login', login);

// * SIGNUP
router.post('/signup', signup);

module.exports = router;
