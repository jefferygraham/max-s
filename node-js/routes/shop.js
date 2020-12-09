const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const shopRouter = express.Router();

shopRouter.get('/', shopController.getIndex);
shopRouter.get('/products', shopController.getProducts);
shopRouter.get('/cart', shopController.getCart);
shopRouter.get('/orders', shopController.getOrders);
shopRouter.get('/checkout', shopController.getCheckout);

module.exports = shopRouter;
