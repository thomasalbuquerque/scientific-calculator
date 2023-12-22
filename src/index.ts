import Decimal from 'decimal.js';

function add(values: Decimal[]) {
  return values.reduce((a, b) => a.plus(b));
}

function subtract(A: Decimal, B: Decimal) {
  return A.minus(B);
}

function multiply(A: Decimal, B: Decimal) {
  return A.times(B);
}

function divide(A: Decimal, B: Decimal) {
  return A.div(B);
}

function main() {
  Decimal.set({ precision: 26 });

  const sumBscTokens = add([new Decimal('13.05227896647379'), new Decimal('22.644171272818852'), new Decimal('9.504833386272242')]);
  console.log('sumBscTokens', sumBscTokens);

  const mult = multiply(new Decimal('5'), new Decimal('13.05227896647379'));
  console.log('mult', mult);

  const div = divide(mult, new Decimal('2.108724688350413'));
  console.log('div', div);

  const sumNetWithTax = add([new Decimal('13.05227896647379'), new Decimal('3.92334')]);
  console.log('sumNetWithTax', sumNetWithTax);

  const subSuposedTotalMinusTax = subtract(new Decimal('17'), new Decimal('3.92334'));
  console.log('subSuposedTotalMinusTax', subSuposedTotalMinusTax);

  const divastro9_12 = divide(new Decimal('0.000172596'), new Decimal('0.00005308'));
  console.log('divastro9_12', divastro9_12);

  const sumNetWithTax2 = add([new Decimal('13.05227896647379'), divastro9_12]);
  console.log('sumNetWithTax2', sumNetWithTax2);
}

main();
