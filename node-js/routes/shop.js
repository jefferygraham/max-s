const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const shopRouter = express.Router();

shopRouter.get('/', productsController.getProducts);

module.exports = shopRouter;
