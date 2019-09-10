const map = function (array, callback) {
  let newArray=[]
  for (let i=0; i<array.length; i++) {
    newArray[i] = callback (array[i])
  }
    return newArray
}

const reduce = function (array, reducer, start=0) {

  var result;

  if (start !== 0)
    {
      result = reducer(start, array[0])
    }
    else {
      result = array[0]
    }



  for (let i=1; i < array.length; i++) {
      let total = reducer(array[i], result)
      if (isNaN(total) == true) {
        result = !!total
      }
      else {
        result = total

      }
  }
  return result

}

/* // Add your functions here
function sayHello(name="") {
  console.log(`Hello${name}`)
}

let sayHola = function(name="") {
  console.log(`Hola${name}`)
}

functionUsingCallback(sayHello, sayHola, function(name="") {
  console.log(`Ni Hao${name}`)
}, " Gary")

function functionUsingCallback(en, es, zh, name){
  en(name)
  es(name)
  zh(name)
}
*/
