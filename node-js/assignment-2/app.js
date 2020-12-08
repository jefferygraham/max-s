const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('Middleware 1');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Middleware 2');
//   res.send('<h1>One Response</h1>');
// });

app.use('/users', (req, res, next) => {
  res.send('<h1>Users Page</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Home Page</h1>');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
