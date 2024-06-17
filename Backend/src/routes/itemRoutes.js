// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const { saveItems } = require('../controllers/itemController');

router.post('/save-items', saveItems);

module.exports = router;
