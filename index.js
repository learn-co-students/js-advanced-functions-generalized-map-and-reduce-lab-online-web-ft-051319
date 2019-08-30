// Add your functions here

function map(source, callback) {
  let r = []
  for (let i = 0; i < source.length; i++) {
    let theElement = source[i]
    r.push(callback(theElement))
  }
  return r;
}

function reduceToTotal(source, start) {
    let total = start
    for (let i = 0; i < source.length; i++) {
        let theElement = source[i]
        callback(theElement)}
        return total
    }

function reduce(source, callback, start){
// where start is provided, assign r to start else assign r to first element in array
  let r = (!!start) ? start : source[0]
// where start is provided, assign i to 0 else assign i to 1
  let i = (!!start) ? 0 : 1

  for (; i < source.length; i++) {
    r = callback(source[i], r)
  }

  return r;
}
