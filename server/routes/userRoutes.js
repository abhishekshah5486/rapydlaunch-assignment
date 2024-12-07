const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');

router.post('/login', userControllers.login_user);
router.post('/register', userControllers.register_user);

module.exports = router;