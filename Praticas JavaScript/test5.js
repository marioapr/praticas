function grow(x){
    return x.reduce(function(a,v,i,arr){
      a = a * v
      console.log(a,v)
      return a
    }, 1)
  };

  console.log(grow([1,2,3,4,5]))