const promiseTest = require('./promiseExample');

test('The data is peanut butter', () => {
    return promiseTest.then(data => {
        expect(data).toBe('peanut butter');
    })
})

test('the data is peanut butter, with async await', async () => {
    const data = await promiseTest;
    expect(data).toBe('peanut butter');
})