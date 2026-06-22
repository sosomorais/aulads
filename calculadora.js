const calculadora = {
    numero1: 15,
    numero2: 5,
  
    somar() {
      return this.numero1 + this.numero2;
    },
  
    subtrair() {
      return this.numero1 - this.numero2;
    },
  
    multiplicar() {
      return this.numero1 * this.numero2;
    },
  
    dividir() {
      return this.numero1 / this.numero2;
    }
  };
  
  module.exports = calculadora;

