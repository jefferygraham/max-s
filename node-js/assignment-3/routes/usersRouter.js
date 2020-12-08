const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

module.exports = userRouter;
