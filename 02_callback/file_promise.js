const fs = require('fs').promises;

fs.readFile('test.txt', 'utf-8')
  .then(function (data) {
    console.log('1번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('4번', data.toString());
    return fs.readFile('test.txt', 'utf-8');
  })
  .catch(function (err) {
    console.log(err);
  });
