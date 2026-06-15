const multiplicacao = require('.multiplicaçao')
test ('deve multiplicar dois valores' , () => {
});
test ('deve multiplicar numeros decimais',() => {
    expect(multiplicacao(2,5,4)). toBe(10);
});
test('deve multiplicar dois numeros negatovos', () => {
    expect(multiplicacao(-2,3).toBe(-6));
});
test('deve mostrar um erro no test', () => {
    expect(multiplicacao(0, "a")).toBe(0);
});