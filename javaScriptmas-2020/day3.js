function chunkyMonkey(values, size) {
    let result = [];
    result[0] = values.slice(0, size);
    result[1] = values.slice(size);
    
    return result;
}