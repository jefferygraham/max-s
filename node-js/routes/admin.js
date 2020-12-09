const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const adminRouter = express.Router();

adminRouter.get('/add-product', adminController.getAddProduct);
adminRouter.post('/add-product', adminController.postAddProduct);
adminRouter.get('/products', adminController.getAdminProducts);

module.exports = adminRouter;
