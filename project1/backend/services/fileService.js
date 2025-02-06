const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../users.json');

// Function to read users from the JSON file
const readUsersFromFile = () => {
    try {
        const data = fs.readFileSync(usersFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading users from file:', error);
        return [];
    }
};

// Function to write users to the JSON file
const writeUsersToFile = (users) => {
    try {
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Error writing users to file:', error);
    }
};

// Function to add a new user
const addUser = (user) => {
    const users = readUsersFromFile();
    users.push(user);
    writeUsersToFile(users);
};

// Function to update a user
const updateUser = (updatedUser) => {
    const users = readUsersFromFile();
    const index = users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
        users[index] = updatedUser;
        writeUsersToFile(users);
    }
};

// Function to delete a user
const deleteUser = (userId) => {
    let users = readUsersFromFile();
    users = users.filter(user => user.id !== userId);
    writeUsersToFile(users);
};

// Function to partially update a user
const patchUser = (userId, partialData) => {
    const users = readUsersFromFile();
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users[index] = { ...users[index], ...partialData };
        writeUsersToFile(users);
    }
};

module.exports = {
    readUsersFromFile,
    writeUsersToFile,
    addUser,
    updateUser,
    deleteUser,
    patchUser
};