// @ts-check
const express = require('express');

const app = express();
const PORT = 4000;

// localhost:4000/~~~
app.get('/id/:id', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.get('/api', (req, res) => {
  res.send('api 요청이 접수 되었습니다!');
});

app.listen(PORT, () => {
  console.log(`${PORT} 번 실행 중`);
});
