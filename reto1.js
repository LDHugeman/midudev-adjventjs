class Oveja {
  /**
   * @type {String} name
   */
  name;
  /**
   * @type {String} color
   */
  color;
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
];

/**
 * @param {Oveja[]} ovejas
 * @returns Un array con las ovejas de color rojo con "N" y "A" en el nombre
 */
export default function contarOvejas(ovejas) {
  return ovejas.filter((oveja) => {
    return (
      oveja.color === 'rojo' &&
      oveja.name.toLowerCase().includes('n') &&
      oveja.name.toLowerCase().includes('a')
    );
  });
}

console.log(contarOvejas(ovejas));
