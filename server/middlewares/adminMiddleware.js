const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.verify_admin_credentials = (req, res, next) => {
    const { userId, password } = req.query;

    try {
        
        const admin = userModel.findOne({ userId, role: 'admin' });
        if (!admin) {
            return res.status(404).json({ message: 'Invalid Admin Id.' });
        }

        const isPasswordValid = bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid admin password.' });
        }

        req.admin = admin;
        next();

    } catch (err) {
        
        console.log("Error verifying admin credentials: ", err);
        return res.status(500).json({ message: 'Internal Server Error.' });

    }
}