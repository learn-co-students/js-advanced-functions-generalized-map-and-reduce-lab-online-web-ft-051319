// map-like
function map(array, fn) {
    let newArray = []
    array.forEach(item => {
        newArray.push(fn(item))
    })
    return newArray
}

// reduce-like
function reduce(array, fn, startingPoint) {
    let value = startingPoint ? startingPoint : array[0];
    let i = (value === array[0]) ? 1 : 0;
    for(i; i < array.length; i++) {
        value = fn(value, array[i]);
    }
    return value
}