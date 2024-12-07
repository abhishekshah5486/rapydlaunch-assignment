const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

const verify_admin_credentials = async (req, res, next) => {
    const { userId, password } = req.query;

    try {
        
        const admin = await userModel.findOne({ userId, role: 'admin' });
        if (!admin) {
            return res.status(404).json({ message: 'Invalid Admin Id.' });
        }
        
        req.admin = admin;
        next();

    } catch (err) {
        
        console.log("Error verifying admin credentials: ", err);
        return res.status(500).json({ message: 'Internal Server Error.' });

    }
}

module.exports = verify_admin_credentials;