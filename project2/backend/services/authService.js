const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.comparePassword = async (inputPassword, storedPassword) => {
    return await bcrypt.compare(inputPassword, storedPassword);
};

exports.generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });
};