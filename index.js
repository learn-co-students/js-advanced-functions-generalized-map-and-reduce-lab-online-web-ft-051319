// Add your functions here
function map(array, block){
  return array.map(x => block(x))
}

function reduce(array, block, startingValue = 0){
  return array.reduce((current, next) => block(current, next, startingValue = 0))
}
//
// function reduce(array, block, startingValue){
//   return array.reduce(function (current, next, startingValue) {
//     if(startingValue === undefined){
//       return block(current, next)
//     }
//     else {
//       return block(current, next, startingValue)
//     }
//
//   })
// }
