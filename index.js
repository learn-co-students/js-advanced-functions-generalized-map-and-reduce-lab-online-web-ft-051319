// Add your functions here
//Make a map function that accepts an object and then rules with what to do 

//let numbers = [1, 2, 3, 4]
//function multiply(number){
//    return number *2
//}
// 
//map(numbers, multiply)
// => [2, 4, 6, 8]
//
//let people = [{name: "Charles", age: 6}, {name: "Chris", age:2}]
// function getName(obj) {
//    return obj.name
//}
// map(people, getName)
// => ["Charles", "Chris"]


function map(srcArray, cbFunc){
    let x = [];
    for(let i = 0; i < srcArray.length; i++) {
        x.push(cbFunc(srcArray[i]))
    } 
    return x
}

function reduce(srcArray, cbFunc, startValue = 0){
    if(startValue){
        let sum = startValue
        for(let i = 0; i < srcArray.length; i++) {
          sum =  cbFunc(srcArray[i], sum)
        }
        return sum 
    } else {
        let sum = srcArray[0];
        for(let i = 1; i < srcArray.length; i++) {
            sum =  cbFunc(srcArray[i], sum)
        }
        return sum
    }
}
