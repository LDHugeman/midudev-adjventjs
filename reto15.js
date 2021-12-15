//checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
//checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
//checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
//checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

//checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
//checkSledJump([1, 2, 3]) // false: sólo sube
//checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!

/**
 *
 * @param {Array} heights
 * @returns
 */
/*export default function checkSledJump(heights) {
  if (heights.length >= 3) {
    let isAscend = true;
    let isDescend = false;
    for (let i = 0; i < heights.length - 1; i++) {
      if (heights[i + 1] <= heights[i]) {
        if (heights[i + 1] == heights[i] || i == heights.length - 4) {
          return false;
        }
        isAscend = false;
      } else if (heights[i + 1] > heights[i]) {
        if (i + 1 == 2 && !isDescend) {
          return false;
        }
        isDescend = true;
      }
    }
    if (isAscend || !isDescend) {
      return false;
    }
    return true;
  }
}*/

export default function checkSledJump(heights) {
  if (heights.length >= 3) {
    let isAscend = true;
    let isCorrect = true;
    for (let i = 0; i < heights.length - 1; i++) {
      if (heights[i + 1] <= heights[i] && isAscend) {
        isAscend = false;
      } else if (heights[i + 1] >= heights[i] && !isAscend) {
        isCorrect = false;
      } else if (i + 1 == heights.length && isAscend) {
        isCorrect = false;
      }
    }
    if (isAscend) {
      isCorrect = false;
    }
    return isCorrect;
  }
}

console.log(checkSledJump([1, 2, 3, 2, 1]));
console.log(checkSledJump([0, 1, 0]));
console.log(checkSledJump([0, 3, 2, 1]));
console.log(checkSledJump([0, 1000, 1]));

console.log(checkSledJump([2, 4, 4, 6, 2]));
console.log(checkSledJump([1, 2, 3]));
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3]));
console.log(checkSledJump([100, 25, 20, 40, 55, 33]));
