// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
//shouldBuyFidelity(1); // false -> Mejor comprar tickets de un sólo uso
//shouldBuyFidelity(100); // true -> Mejor comprar tarjeta fidelidad

export default function shouldBuyFidelity(times) {
  const normalTicket = 12 * times;
  const fidelityCard = 250 + ((12 * 0.75) ^ times);
  return fidelityCard < normalTicket;
}

console.log(shouldBuyFidelity(1));
