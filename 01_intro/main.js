// @ts-check

const http = require('http');

const server = http.createServer((req, res) => {
  res.statuscode = 200;
  res.end('Hello');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 작동 중입니다!`);
});
