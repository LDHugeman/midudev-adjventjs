const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite',
    },
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta', // <- ¡Está aquí!
    },
  },
};

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando',
    },
  },
};

/**
 *
 * @param {Object} store
 * @param {String} product
 * @returns
 */
export default function contains(store, product) {
  let hasProduct = false;
  let values = Object.values(store);
  if (values.includes(product)) {
    hasProduct = true;
  } else {
    values.forEach((value) => {
      if (typeof value === 'object') {
        if (contains(value, product)) {
          hasProduct = true;
        }
      }
    });
  }
  return hasProduct;
}

console.log(contains(otroAlmacen, 'mando')); // true

//contains(otroAlmacen, 'gameboy') // false
