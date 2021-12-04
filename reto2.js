const letter = 'bici  coche balón _playstation bici coche peluche';

/**
 *
 * @param {String} letter
 * @returns
 */
export default function listGifts(letter) {
  const gifts = letter.split(' ');
  const filtergifts = gifts.filter((gift) => !gift.startsWith('_'));
  const counts = {};
  filtergifts.forEach((gift) => {
    if (gift != '') {
      counts[gift] = (counts[gift] || 0) + 1;
    }
  });
  return counts;
}

console.log(listGifts(letter));
