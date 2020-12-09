const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const shopRouter = express.Router();

shopRouter.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    activeShop: true,
    productsCSS: true,
  });
});

module.exports = shopRouter;
