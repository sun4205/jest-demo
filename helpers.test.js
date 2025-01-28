const sayHello = require('./helpers');

test('Creates a greeting', () => {
    expect(sayHello('Lera', 'Jackson')).toBe('Hello, Ms. Lera Jackson!');
  });