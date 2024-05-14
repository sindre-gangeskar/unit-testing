function sum(a, b) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number')
        throw new Error('Both arguments need to be numbers');

    return a + b;
}

function sumArrays(a, b) {
    if (a.length !== b.length)
        throw new Error('Both arrays need to have the same length');

    let results = [];
    for (let i = 0; i < a.length; i++) {
        if (typeof a[ i ] != 'number' || typeof b[i] != 'number')
            throw new Error('All arguments need to be numbers');
        results.push(a[ i ] + b[ i ]);
    }
    return results;
}

module.exports = { sum, sumArrays };