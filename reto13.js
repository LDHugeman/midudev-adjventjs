//wrapGifts(['📷', '⚽️']);
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

//wrapGifts(['🏈🎸', '🎮🧸']);
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

//wrapGifts(['📷']);
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

/**
 *
 * @param {Array} gifts
 * @returns
 */
export default function wrapGifts(gifts) {
  const wrappedGifts = [];
  let areGiftsSmall = false;
  if (gifts.length == 0) {
    return wrappedGifts;
  } else {
    wrappedGifts.push('******');
    gifts.forEach((element) => {
      if (gifts[0].length <= 2) {
        areGiftsSmall = true;
      }
      wrappedGifts.push('*' + element + '*');
    });
    wrappedGifts.push('******');
  }
  if (areGiftsSmall) {
    wrappedGifts.splice(0, 1, '****');
    wrappedGifts.splice(wrappedGifts.length - 1, 1, '****');
  }
  return wrappedGifts;
}

console.log(wrapGifts(['🏈🎸', '🎮🧸']));
