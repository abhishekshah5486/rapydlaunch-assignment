const userModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');

exports.login_admin = async (req, res) => {
    try {
        
        const { email, password } = req.body;
        const admin = await userModel.findOne({ email: email, role: 'admin' });

        if (!admin) {
            return res.status(400).json({ message: 'Invalid email id.' });
        }

        const is_password_valid = await bcrypt.compare(password, admin.password);
        if (!is_password_valid) {
            return res.status(400).json({ message: 'Invalid password.' });
        }

        res.status(200).json({
            sucess: true,
            message: 'Successfully logged in.',
        });

    } catch (err) {
        
        res.status(500).json({
            message: 'Internal server error.',
        });

    }
}

exports.create_instructor_account = async (req, res) => {
    try {

        const { email, password } = req.body;

        // Check if the email is already registered.
        const email_already_registered = await userModel.findOne({ email: email });
        if (email_already_registered) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered.',
            });
        }

        // Salting and password hashing
        const salt = await bcrypt.genSalt(10);
        const hashed_password = await bcrypt.hash(password, salt);  
        req.body.password = hashed_password;

        const new_instructor = new userModel({
            ...req.body,
            role: 'instructor',
        });
        await new_instructor.save();

        res.status(201).json({
            success: true,
            message: 'Instructor account created successfully.',
            data: new_instructor,
        });
        
    } catch (err) {
        
        console.log("Error creating instructor account: ", err);
        res.status(500).json({
            success: false,
            message: 'Internal server error.',
            err: err,
        });

    }
}