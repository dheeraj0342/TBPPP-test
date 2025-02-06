const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.post('/validate', userController.validateUser);
router.post('/login', userController.loginUser);
router.get('/activity', userController.getUserActivity);

module.exports = router;