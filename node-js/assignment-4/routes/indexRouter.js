const express = require('express');

const indexRouter = express.Router();

const users = [];

indexRouter.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Home', path: '/' });
});

module.exports = indexRouter;
