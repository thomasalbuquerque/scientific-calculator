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

  const sumT1 = add([new Decimal('4645.204342122197'), new Decimal('7.795657877803235')]);
  console.log('sumT1', sumT1);

  const sumT2 = add([
    new Decimal('2568.405220540000000000'),
    new Decimal('48.67217106109838'),
    new Decimal('50.18217106109838'),
    new Decimal('49.39217106109838'),
  ]);
  console.log('sumT2', sumT2);

  const sumT3 = add([
    new Decimal('3371.756500000000000000'),
    new Decimal('56.052171061098385'),
    new Decimal('79.70217106109838'),
    new Decimal('250.6821710610984'),
  ]);
  console.log('sumT3', sumT3);

  const sumT4 = add([
    new Decimal('0.006192047225220400'),
    new Decimal('48.67217106109838'),
    new Decimal('50.18217106109838'),
    new Decimal('49.39217106109838'),
  ]);
  console.log('sumT4', sumT4);

  const sumT5 = add([
    new Decimal('0.003276879908947176'),
    new Decimal('56.052171061098385'),
    new Decimal('79.70217106109838'),
    new Decimal('250.6821710610984'),
  ]);
  console.log('sumT5', sumT5);
}

main();
