const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');

// Login a user
router.post('/login', userControllers.login_user);
// Register a new user
router.post('/register', userControllers.register_user);
// Retrieve a user profile by userId
router.get('/:userId', userControllers.get_user_profile);
// Update a user profile by userId
router.put('/:userId', userControllers.update_user_profile);
// Delete a user profile by userId
router.delete('/:userId', userControllers.delete_user_profile);

module.exports = router;