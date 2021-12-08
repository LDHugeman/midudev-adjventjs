const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const pricesEth = [10, 20, 30, 40, 50, 60, 70];

const pricesDoge = [18, 15, 12, 11, 9, 7];
const pricesAda = [3, 3, 3, 3, 3];

export default function maxProfit(prices) {
  const pricesLength = prices.length;
  let resultado = 0;
  for (let i = 0; i < pricesLength; i++) {
    let firstNumber = prices.shift();
    for (let j = 0; j < prices.length; j++) {
      let secondNumber = prices[j];
      let profit = Math.abs(firstNumber - secondNumber);
      if (profit > resultado) {
        resultado = profit;
      }
    }
  }
  return resultado || -1;
}

maxProfit(pricesBtc); // -> 16 (compra a 18, vende a 34)
maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)

maxProfit(pricesDoge); // -> -1 (no hay ganancia posible)
maxProfit(pricesAda); // -> -1 (no hay ganancia posible)
