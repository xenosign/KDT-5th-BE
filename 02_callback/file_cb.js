const fs = require('fs');

fs.readFile('test.txt', 'utf-8', function (err, data) {
  if (err) return console.log(err);
  console.log('1번', data.toString());
  fs.readFile('test.txt', 'utf-8', function (err, data) {
    if (err) return console.log(err);
    console.log('2번', data.toString());
    fs.readFile('test.txt', 'utf-8', function (err, data) {
      if (err) return console.log(err);
      console.log('3번', data.toString());
      fs.readFile('test.txt', 'utf-8', function (err, data) {
        if (err) return console.log(err);
        console.log('4번', data.toString());
      });
    });
  });
});

console.log('1');
console.log('4');
console.log('3');
console.log('2');
