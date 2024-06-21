const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getUserProfile, updateUserAddress } = require('../controllers/userController');

router.get('/profile', auth, getUserProfile);
router.put('/address', auth, updateUserAddress);

module.exports = router;
