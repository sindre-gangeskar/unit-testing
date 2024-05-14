const forEach = require('./forEach');

const mockCallback = jest.fn((x) => `Teacher ${x}`);

test('forEach mock function', () => {
    forEach([ 'John', 'The Man', 'Doe' ], mockCallback);

    expect(mockCallback.mock.calls).toHaveLength(3);
    expect(mockCallback.mock.calls[ 0 ][ 0 ]).toBe('John'); 
    expect(mockCallback.mock.calls[ 1 ][ 0 ]).toBe('The Man'); 
    expect(mockCallback.mock.calls[ 2 ][ 0 ]).toBe('Doe'); 
    expect(mockCallback.mock.results[0].value).toBe('Teacher John'); 
})