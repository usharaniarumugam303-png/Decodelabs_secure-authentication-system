const express = require('express');
const router = express.Router();
const {
    register,
    login,
    getMe,
    protectedRoute
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/me', protect, getMe);
router.get('/protected', protect, protectedRoute);

module.exports = router;