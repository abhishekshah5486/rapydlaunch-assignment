const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/adminControllers');
const verify_admin_credentials = require('../middlewares/adminMiddleware');

router.post('/login', adminControllers.login_admin);
router.post('/create-instructor', verify_admin_credentials, adminControllers.create_instructor_account);

module.exports = router;