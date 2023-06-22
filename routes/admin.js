const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin')

router.get('/add-product', adminController.getFormAdd);

router.post('/post-add-product', adminController.saveProduct);

router.get('/products', adminController.getProducts)

module.exports = router;