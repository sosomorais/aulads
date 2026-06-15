const somar = require('./somar');
test('soma de 5 e 10 deve ser igual a 15', ()=> {
    expect(somar(5,10)).toBe(15);
});