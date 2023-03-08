// @ts-check
const express = require('express');
const cors = require('cors');

const PORT = 4000;

const app = express();

app.use(cors());

app.use('/', (req, res) => {
  const str = 'Hello, Here is backend! 한글도 보낸다!';
  const json = JSON.stringify(str);
  res.send(str);
});

app.listen(PORT, () => {
  console.log(`데이터 통신 서버가 ${PORT}번에서 실행 중입니다!`);
});
