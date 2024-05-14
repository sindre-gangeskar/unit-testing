const isEven = require('./isEven');

test('Should succeed as number is even', () => {
    expect(isEven(2)).toBe(true);
})

test('Should fail as number is not even', () => {
    expect(isEven(3)).toBe(false);
})