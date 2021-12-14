/* coins[0] = 1 céntimos
   coins[1] = 2 céntimos
   coins[2] = 5 céntimos
   coins[3] = 10 céntimos
   coins[4] = 20 céntimos
   coins[5] = 50 céntimos */

//getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
//getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
//getCoins(5); // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
//getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
//getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

/**
 *
 * @param {Number} change
 * @returns
 */
export default function getCoins(change) {
  const coinsCount = [0, 0, 0, 0, 0, 0];
  const coinsValue = [1, 2, 5, 10, 20, 50];

  while (change > 0) {
    let coin = coinsValue.pop();
    let position = coinsValue.length;
    let count = Math.floor(change / coin);
    change -= count * coin;
    if (count) coinsCount[position] = count;
  }
  return coinsCount;
}

console.log(getCoins(16));

function getChange(amount) {
  var denominations = [1, 2, 5, 10, 20, 50]; // cents
  var result = [];
  while (amount > 0) {
    var coin = denominations.pop(); // Get next greatest coin
    var count = Math.floor(amount / coin); // See how many times I need that coin
    amount -= count * coin; // Reduce the amount with that number of coins
    if (count) result.push([coin / 100, count]); // Store count & coin
  }
  return result;
}
