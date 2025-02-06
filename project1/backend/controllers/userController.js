const fs = require('fs');
const path = require('path');
const User = require('../models/userModel');

const usersFilePath = path.join(__dirname, '../users.json');

exports.createUser = (req, res) => {
    const newUser = req.body;
    User.createUser(newUser);
    res.status(201).json(newUser);
};

exports.getUsers = (req, res) => {
    const users = User.readUsers();
    res.status(200).json(users);
};

exports.getUserById = (req, res) => {
    const users = User.readUsers();
    const user = users.find(user => user.id === req.params.id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

exports.updateUser = (req, res) => {
    const updatedUser = req.body;
    User.updateUser(req.params.id, updatedUser);
    res.status(200).json(updatedUser);
};

exports.patchUser = (req, res) => {
    const updates = req.body;
    User.patchUser(req.params.id, updates);
    res.status(200).json({ message: 'User updated successfully' });
};

// Delete a user
exports.deleteUser = (req, res) => {
    User.deleteUser(req.params.id);
    res.status(204).send();
};