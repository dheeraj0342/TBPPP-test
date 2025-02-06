const User = require('../models/userModel');
const emailService = require('../services/emailService');
const authService = require('../services/authService');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const validationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const newUser = new User({ name, email, password, validationCode, validationStatus: false });

    try {
        await newUser.save();
        await emailService.sendValidationEmail(email, validationCode);
        res.status(201).json({ message: 'User registered successfully. Please check your email for the validation code.' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

exports.validateUser = async (req, res) => {
    const { email, validationCode } = req.body;

    try {
        const user = await User.findOne({ email, validationCode });
        if (user) {
            user.validationStatus = true;
            await user.save();
            res.status(200).json({ message: 'User validated successfully' });
        } else {
            res.status(400).json({ message: 'Invalid validation code' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error validating user', error });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user && await authService.comparePassword(password, user.password)) {
            const token = authService.generateToken(user);
            res.status(200).json({ message: 'Login successful', token });
        } else {
            res.status(400).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error logging in user', error });
    }
};

exports.getUserActivity = async (req, res) => {
    const { userId } = req.query;

    try {
        const user = await User.findById(userId);
        if (user) {
            res.status(200).json({ activity: user.activity });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user activity', error });
    }
};