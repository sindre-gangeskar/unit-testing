const getType = require('./getType');

test('Expected to succeed', () => {
    expect(getType(1, 'number')).toBe('number');
})

test('Should throw TypeError for incorrect value type', () => {
    expect(() => getType(1, 'string')).toThrow();
});

test('Should expect to succeed as value type is identical to type specified', () => {
    expect(getType(1, 'number')).toBe('number');
})

