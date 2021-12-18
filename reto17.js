const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []],
];

//countPackages(carriers, 'dapelu'); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []],
];

//countPackages(carriers2, 'camila'); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15

/**
 *
 * @param {Array} carriers
 * @param {String} carrierID
 * @returns
 */
export default function countPackages(carriers, carrierID) {
  let numberOfPackages = 0;
  carriers.forEach((carrier) => {
    if (carrierID == carrier[0]) {
      numberOfPackages += carrier[1];
      if (carrier[2].length > 0) {
        carrier[2].forEach((person) => {
          numberOfPackages += countPackages(carriers, person);
        });
      }
    }
  });
  return numberOfPackages;
}

console.log(countPackages(carriers, 'dapelu'));
console.log(countPackages(carriers2, 'camila'));
