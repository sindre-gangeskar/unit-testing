const words = require('./words');

test('My name is John Doe', () => {
    expect(words('John', 'Doe')).toBe('John Doe');
})
