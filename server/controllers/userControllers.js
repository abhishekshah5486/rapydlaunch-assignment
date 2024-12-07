const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.register_user = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if the email already registered
        const email_already_registered = await userModel.findOne({ email: email, role: 'student' });
        if (email_already_registered) {
            return res.send({
                success: false,
                message: "Email already exists. Please login to continue."
            })
        }
        // Salting and Password Hashing
        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, salt);
        req.body.password = hashed_password;

        const newUser = new userModel({
            ...req.body,
            role: 'student'
        });
        await newUser.save();

        return res.status(201).send({
            success: true,
            message: "User registered successfully.",
            data: newUser
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Server error.",
            error: err.message
        });

    }
}

exports.login_user = async (req, res) => {
    try {
        
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email, role: 'student' });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email id.' });
        }

        const is_password_valid = await bcrypt.compare(password, user.password);
        if (!is_password_valid) {
            return res.status(400).json({ message: 'Invalid password.' });
        }

        res.status(200).json({
            success: true,
            message: 'Successfully logged in.',
            data: user,
        });

    } catch (err) {
        
        res.status(500).json({
            success: false,
            message: 'Internal server error.',
            error: err
        });

    }
}