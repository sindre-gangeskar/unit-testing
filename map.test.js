const map = require('./map');
let mockCallback = jest.fn(x => 42 + x);

test('map mock function', () => {
    map([ 0, 1 ], mockCallback)
    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);
    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[ 0 ][ 0 ]).toBe(0);
    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[ 1 ][ 0 ]).toBe(1);
    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[ 0 ].value).toBe(42);
});

test('map length', () => {
    map([ 1, 2 ], mockCallback);
    // The mock function was called twice (once here and once in the
    // previous testm so we expect 2 * 2 = 4 calls)
    expect(mockCallback.mock.calls).toHaveLength(4);
});

test('map throw', () => {
    var test = () => map(1, mockCallback);
    expect(test).toThrow('First argument needs to be an iterable.');
});

test('override once', () => {
    mockCallback = mockCallback.mockImplementationOnce(x => 10);
    map([ 0, 1 ], mockCallback)
    // The return value of the first call to the function was 10
    // we want to access the value for the first of two parameters, so we
    // use the.at(-2) to do that
    expect(mockCallback.mock.results.at(-2).value).toBe(10);
    map([ 0, 1 ], mockCallback)
    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results.at(-2).value).toBe(42);
})

test('override once', () => {
    mockCallback = mockCallback.mockImplementation(x => x + 2);
    map([ 0, 1 ], mockCallback)
    // we want to access the value for the first of two parameters, so we
    // use the.at(-2) to do that
    expect(mockCallback.mock.results.at(-2).value).toBe(2);
    map([ 0, 1 ], mockCallback)
    // The return value of the first call to the function was 2
    expect(mockCallback.mock.results.at(-2).value).toBe(2);
})