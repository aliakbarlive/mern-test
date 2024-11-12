const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

const register = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, dateOfBirth, skills } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        if (!req.file) {
            return res.status(400).json({ message: 'Image is required' });
        }
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            dateOfBirth,
            skills,
            image: req.file.path
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("user registration failed", error);
        res.status(500).json({ message: 'user registration failed' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
        const isMatch = await bcrypt.compare(password, user.password);
        if (!user || !isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        delete user._doc.password;
        const data = {
            ...user._doc,
            token
        }
        res.status(200).json({ user: data });
    } catch (error) {
        console.error("user login failed", error);
        res.status(500).json({ message: 'user login failed' });
    }
};

module.exports = { register, login };