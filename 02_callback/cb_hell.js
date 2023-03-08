function funcHell(callback) {
  callback();
}

funcHell(function () {
  console.log('1번 인척 하는 새로 만든 익명 함수');
  funcHell(function () {
    console.log('2번 인척 하는 새로 만든 익명 함수');
    funcHell(function () {
      console.log('3번 인척 하는 새로 만든 익명 함수');
    });
  });
});
