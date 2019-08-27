// Add your functions here
function map(src, fn) {
    let r = []
    for (let i = 0; i < src.length; i++ ) {
      r.push(fn(src[i])) // Unique work
    }
    return r
  }

  function reduce(src, fn, starting = 0){
    let result;
    let i;
    if(starting){
        result = starting
    }else{
        result = src[0]
    }

    if(!!starting){
        i = 0
    }else{
        i = 1
    }

    for(; i < src.length; i++){
        result = (fn(src[i], result))
    }
    return result;
  }