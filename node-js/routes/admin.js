const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const adminRouter = express.Router();

adminRouter.get('/add-product', productsController.getAddProduct);

adminRouter.post('/add-product', productsController.postAddProduct);

module.exports = adminRouter;
