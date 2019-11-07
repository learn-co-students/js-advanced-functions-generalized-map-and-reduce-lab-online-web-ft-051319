// Add your functions here

function map(source, transformFunc) {
    let x = [];
    source.forEach(element => {
        x.push(transformFunc(element))
    })
    return x;
};

function reduce(source, func, start) {
    let reduced = (!!start) ? start : source[0];
    let count = (!!start) ? 0 : 1;
  
    for (; count < source.length; count++) {
      reduced = func(source[count], reduced);
    }
  
    return reduced;
};