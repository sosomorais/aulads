const calculadora = require('./calculadora');

// SOMA
calculadora.numero1 = 15;
calculadora.numero2 = 5;
console.log("Soma:", calculadora.somar());

// SUBTRAÇÃO
calculadora.numero1 = 20;
calculadora.numero2 = 8;
console.log("Subtração:", calculadora.subtrair());

// MULTIPLICAÇÃO
calculadora.numero1 = 3;
calculadora.numero2 = 4;
console.log("Multiplicação:", calculadora.multiplicar());

// DIVISÃO
calculadora.numero1 = 20;
calculadora.numero2 = 4;
console.log("Divisão:", calculadora.dividir());