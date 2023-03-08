const promise = new Promise(function (resolve, reject) {
  const tetz = 'older';

  if (tetz === 'old') {
    setTimeout(function () {
      resolve('tetz is old');
    }, 3000);
  } else {
    reject('tetz is getting old');
  }
});

promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (data) {
    console.log(data);
  });
