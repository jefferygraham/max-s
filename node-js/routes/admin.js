const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminRouter = express.Router();

const products = [];

adminRouter.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    activeAddProduct: true,
    productsCSS: true,
    formsCSS: true,
  });
});

adminRouter.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = adminRouter;
exports.products = products;
