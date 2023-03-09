// @ts-check
const express = require('express');

const app = express();
const PORT = 4000;

const userRouter = require('./routes/users');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express world!');
});

app.listen(PORT, () => {
  console.log(`${PORT} 번에서 서버 실행`);
});
