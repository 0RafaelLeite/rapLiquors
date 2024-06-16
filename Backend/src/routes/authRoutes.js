const express = require('express');
const router = express.Router();
const { register, login, addAddress } = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.put('/address', auth, addAddress);

module.exports = router;
