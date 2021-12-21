const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
//fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game'];
//fixFiles(files2) = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
//fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']

/**
 *
 * @param {Array} files
 */
export default function fixFiles(files) {
  for (let i = 0; i < files.length; i++) {
    let count = 0;
    for (let j = i + 1; j < files.length; j++) {
      if (files[i] === files[j]) {
        count++;
        files[j] = files[i] + '(' + count + ')';
      }
    }
  }
  return files;
}

/*
let count;
  let filesFixed = files.reduce(function (previousValue, currentValue) {
    if (previousValue.indexOf(currentValue) === -1) {
      previousValue.push(currentValue);
      count = 1;
    } else {
      previousValue.push(currentValue + '(' + count + ')');
      count++;
    }
    console.log(previousValue);
    return previousValue;
  }, []);
  return filesFixed;
*/

console.log(fixFiles(files));
console.log(fixFiles(files2));
console.log(fixFiles(files3));
