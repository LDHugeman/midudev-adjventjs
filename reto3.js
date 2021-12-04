const letter1 = 'bici coche (balón) bici coche peluche'; // -> ✅
const letter2 = '(muñeca) consola bici'; // ✅

const letter3 = 'bici coche (balón bici coche'; // -> ❌
const letter4 = 'peluche (bici [coche) bici coche balón'; // -> ❌
const letter5 = '(peluche {) bici'; // -> ❌
const letter6 = '() bici'; // ❌
const letter7 = '(()) bici'; // ❌

/**
 *
 * @param {String} letter
 * @returns
 */
export default function isValid(letter) {
  if (containParentheses) {
    const startParentheses = letter.indexOf('(');
    const endParentheses = letter.indexOf(')');
    if (startParentheses < endParentheses) {
      const gift = letter.substring(startParentheses + 1, endParentheses);
      console.log(gift);
      if (
        gift === '' ||
        gift.includes('{') ||
        gift.includes('}') ||
        gift.includes('[') ||
        gift.includes(']') ||
        gift.includes('(') ||
        gift.includes(')')
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function containParentheses(letter) {
  return letter.includes('(') && letter.includes(')');
}

console.log(isValid(letter7));
