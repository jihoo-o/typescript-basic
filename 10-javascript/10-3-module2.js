// import add, { print as p } from './10-3-module.js';
// console.log(add(1, 2));
// p();

import * as calculator from './10-3-module.js';
console.log(calculator.add(1, 2));
calculator.print();
