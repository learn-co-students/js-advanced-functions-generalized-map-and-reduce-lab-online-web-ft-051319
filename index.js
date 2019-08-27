// Add your functions here
function map(array,fn){
  let ans = []
  array.forEach(arr=>{
    ans.push(fn(arr))
  })
  return ans
}

function reduce(array,fn,start){
  // if(!!start){
  //   let total = start //if there was a start argument, then we use that
  // }else{
  //   let total=array[0] //otherwise, the starting point is the first element in the array
  // }
  if (!!start){
    let total=start
    for (let i =0; i<array.length; i++){
      total=fn(total,array[i])
    }
    return total
  }else{
    let total=array[0]
    for (let i =1; i<array.length; i++){
      total=fn(total,array[i])
    }
    return total
  }
}
