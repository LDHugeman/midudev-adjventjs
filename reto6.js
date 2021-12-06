sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]

/**
 *
 * @param {Array} numbers
 * @param {Array} result
 * @returns
 */
export default function sumPairs(numbers, result) {
  const validNumbers = [];
  const numbersLength = numbers.length;
  let areNumbersFound = false;
  for (let i = 0; i < numbersLength; i++) {
    let firstNumber = numbers.shift();
    if (!areNumbersFound) {
      for (let j = 0; j < numbers.length; j++) {
        let secondNumber = numbers[j];
        if (firstNumber + secondNumber === result) {
          validNumbers.push(firstNumber, secondNumber);
          areNumbersFound = true;
        }
      }
    }
  }
  if (validNumbers.length > 0) {
    return validNumbers;
  } else {
    return null;
  }
}

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));
