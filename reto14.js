//missingReindeer([0, 2, 3]); // -> 1
//missingReindeer([5, 6, 1, 2, 3, 7, 0]); // -> 4
//missingReindeer([0, 1]); // -> 2 (¡es el último el que falta!)
//missingReindeer([3, 0, 1]); // -> 2
//missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]); // -> 8
//missingReindeer([0]); // -> 1 (¡es el último el que falta!)

/**
 *
 * @param {Array} ids
 * @returns
 */
export default function missingReindeer(ids) {
  let missingReindeer;
  const sortedIds = ids.sort((a, b) => a - b);
  const count = Math.max(...sortedIds);
  for (let i = 0; i <= count; i++) {
    if (sortedIds.indexOf(i) == -1) {
      missingReindeer = i;
    }
  }
  if (!missingReindeer) {
    if (Math.min(...sortedIds) == 0) {
      return count + 1;
    } else {
      return 0;
    }
  } else {
    return missingReindeer;
  }
}

console.log(missingReindeer([1]));
