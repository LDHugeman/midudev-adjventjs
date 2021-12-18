/*Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100 */

//decodeNumbers('...') // 3
//decodeNumbers('.,') // 4 (5 - 1)
//decodeNumbers(',.') // 6 (5 + 1)
//decodeNumbers(',...') // 8 (5 + 3)
//decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
//decodeNumbers('.;') // 49 (50 - 1)
//decodeNumbers('..,') // 5 (-1 + 1 + 5)
//decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
//decodeNumbers('.;!') // 49 (-1 -50 + 100)
//decodeNumbers('!!!') // 300
//decodeNumbers(';!') // 50
//decodeNumbers(';.W') // NaN

/**
 *
 * @param {String} symbols
 * @returns
 */
export default function decodeNumber(symbols) {
  let symbolsArray = Array.from(symbols);
  let isValid = true;
  let numbers = [];
  let number = 0;
  symbolsArray.forEach((symbol) => {
    switch (symbol) {
      case '.':
        numbers.push(1);
        break;
      case ',':
        numbers.push(5);
        break;
      case ':':
        numbers.push(10);
        break;
      case ';':
        numbers.push(50);
        break;
      case '!':
        numbers.push(100);
        break;
      default:
        isValid = false;
    }
  });
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] == undefined) {
      number += numbers[i];
    } else if (numbers[i + 1] > numbers[i]) {
      number -= numbers[i];
    } else {
      number += numbers[i];
    }
  }
  if (isValid) {
    return number;
  } else {
    return NaN;
  }
}

console.log(decodeNumber('...'));
console.log(decodeNumber('.,'));
console.log(decodeNumber(',.'));
console.log(decodeNumber(',...'));
console.log(decodeNumber('.........!'));
console.log(decodeNumber('.;'));
console.log(decodeNumber('..,'));
console.log(decodeNumber('..,!'));
console.log(decodeNumber(',;!'));
console.log(decodeNumber('!!!'));
console.log(decodeNumber(';!'));
console.log(decodeNumber(';.W'));
