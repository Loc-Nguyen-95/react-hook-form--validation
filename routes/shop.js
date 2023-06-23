const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shop')

router.get('/', shopController.getIndex); 

router.get('/cart', shopController.getCart);

router.post('/post-cart', shopController.postCart);

router.post('/post-delete-cart', shopController.postDeleteCart)

module.exports = router;