const express = require('express');
const router = express.Router();
const { createBeverage, updateBeverage, deleteBeverage, updateStock } = require('../controllers/beverageController');
const auth = require('../middleware/auth');

router.post('/', auth, createBeverage);
router.put('/:id', auth, updateBeverage);
router.delete('/:id', auth, deleteBeverage);
router.put('/stock/:id', auth, updateStock);

module.exports = router;
