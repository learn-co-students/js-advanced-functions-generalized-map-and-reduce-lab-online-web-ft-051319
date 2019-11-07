function mapCallback(num, multiplier) {
    return num * multiplier
}

function map(arr, mapCallback, multiplier) {
    let newArr = [];
    arr.forEach(num => {
        newArr.push(mapCallback(num, multiplier));
    })
    return newArr;
};

function reduce(arr, reduceCallback, startingPoint) {
    let total = startingPoint ? startingPoint : arr[0];
    let i = (total === arr[0]) ? 1 : 0;
    for(i; i<arr.length; i++) {
        total = reduceCallback(total, arr[i]);
    }
    return total;
}