const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: null });
});

app.listen(3000, () => {
  console.log('Server started!');
});
