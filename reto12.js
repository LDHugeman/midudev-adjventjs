const obstacles1 = [5, 3, 6, 7, 9];
//getMinJump(obstacles1) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

const obstacles2 = [2, 4, 6, 8, 10];
//getMinJump(obstacles2) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------
*/

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

//getMinJump([1, 2, 3, 5]) // -> 4
//getMinJump([3, 7, 5]) // -> 2
//getMinJump([9, 5, 1]) // -> 2

/**
 *
 * @param {Array} obstacles
 */
export default function getMinJump(obstacles) {
  const sortedObstacles = obstacles.sort((a, b) => a - b);
  const way = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < sortedObstacles.length; i++) {
    way.splice(sortedObstacles[i], 1, 'X');
  }
  let minJump = 1;
  const maxNumber = Math.max(...obstacles);
  let isMinJumpFound = false;
  while (!isMinJumpFound && minJump <= maxNumber) {
    minJump++;
    isMinJumpFound = !obstacles.find((element) => element % minJump == 0);
  }
  return minJump;
}

console.log(getMinJump(obstacles1));

/* for (let i = 1; i <= way.length-1; i++) {
    while (i == way.length - 1) {
      if (way[i] != 'X') {
        return jump;
      } else {
        jump++;
      }
    }*/

/*for (let i = 0; i < way.length; i++) {
  if (way[i + jump] != 'X') {
  }
}



while (way[jump] != 'X' && jump <= way.length) {
    console.log(jump);
    jump++;
  }

*/

/* if (
      way[jump] != 'X' &&
      way[jump + jump] != 'X' &&
      way[jump + jump + jump] != 'X'
    ) {
      return jump;
    } else {
      jump++;
    }*/
