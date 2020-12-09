const express = require('express');

const usersRouter = express.Router();

const users = [];

usersRouter.get('/', (req, res, next) => {
  res.render('users', { pageTitle: 'Users', users: users, path: '/users' });
});

usersRouter.post('/', (req, res, next) => {
  users.push(req.body.name);
  res.redirect('/');
});

module.exports = usersRouter;
