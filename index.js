function map(array, fn){
    let rtrn = []
    array.forEach(item => {
       rtrn.push(fn(item))
    })
    return rtrn
}

function reduce(array, fn, startingValue) {
    let sum = startingValue ? startingValue : array[0];
    let i = (sum === array[0]) ? 1 : 0;
    for(i; i < array.length; i++) {
        sum = fn(sum, array[i]);
    }
    return sum;
}