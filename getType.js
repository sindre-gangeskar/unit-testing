function getType(value, type) {
    if (typeof value !== type)
        throw new TypeError(`Expected type ${type}, but got type ${typeof (value)} instead`);
    
    return typeof value;
}

module.exports = getType;