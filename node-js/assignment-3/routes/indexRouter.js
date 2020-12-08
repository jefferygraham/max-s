const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const indexRouter = express.Router();

indexRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

module.exports = indexRouter;
