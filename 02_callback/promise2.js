const lucky = false;

const promise = new Promise((resolve, reject) => {
  console.log('주식이 오르기를 기다리기 시작합니다!');

  setTimeout(() => {
    console.log('3년의 시간이 흐르고....');
    if (lucky) {
      const profit = 3000;
      resolve(profit);
    } else {
      reject('아.... 망했어요');
    }
  }, 2000);
});

// promise
//   .then(function (profit) {
//     console.log(`기다림의 보상으로 ${profit} 원을 벌었습니다!`);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

async function howMuch() {
  try {
    const result = await promise;

    if (result) console.log(result);
  } catch (err) {
    console.log(err);
  }
}

howMuch();
