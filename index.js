function map(array, fxn) {
    let r = [];
    for (let i = 0; i < array.length; i++ ) {
        r.push(fxn(array[i]));
    }
    return r;
}

function reduce(array, fxn, startingPoint = 0) {
    let memo = (!!startingPoint) ? startingPoint : array[0]
    for (let i = (!!startingPoint) ? 0 : 1 ; i < array.length; i++ ) {
        memo = fxn(array[i], memo);
    }
    return memo;
}