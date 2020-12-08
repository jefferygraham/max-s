const path = require('path');

const express = require('express');

const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/usersRouter');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('Server started');
});
