/* ____*____        1 -> 1            
   ___***___        2 -> 3                  
   __*****__        3 -> 5
   _*******_        4 -> 7
   *********        5 -> 9
   ____#____
   ____#____   height = 5*/

/* __*__
   _***_  
   *****
   __#__
   __#__  height = 3 */

export default function createXmasTree(height) {
  var tree = '';
  if (height >= 1 && height <= 100) {
    var asterisk = '*';
    var asteriskx2 = '**';
    for (var i = 0; i < height; i++) {
      tree += tree =
        printUnderscore(height - i) +
        asterisk +
        printUnderscore(height - i) +
        '\n';
      asterisk += asteriskx2;
    }
    var treeTrunk =
      printUnderscore(height) +
      '#' +
      printUnderscore(height) +
      '\n' +
      printUnderscore(height) +
      '#' +
      printUnderscore(height);
  } else {
    console.log('Altura no válida');
  }
  var treeComplete = tree + treeTrunk;
  return treeComplete;
}

function printUnderscore(height) {
  var underscore = '';
  for (var i = 0; i < height - 1; i++) {
    underscore += '_';
  }
  return underscore;
}

console.log(createXmasTree(2));

//console.log(printUnderscore(2));
