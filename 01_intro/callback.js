// @ts-check
function buySync(item, price, quantity, callback) {
  console.log(`${item} 상품을 ${quantity}개 골라서 점원에게 주었습니다.`);

  setTimeout(() => {
    console.log('계산이 필요합니다.');
    const total = price * quantity;

    callback(total);
  }, 2000);
}

function pay(total) {
  console.log(`${total} 원을 지불 하였습니다.`);
}

buySync('포켓몬빵', 1000, 5, pay);
