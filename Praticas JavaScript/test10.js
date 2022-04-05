function getMiddle(s){
  if (s.length === 1 || s.length ===2 ){
      return s
  }
  if(s.length%2 === 0){
      const num = (s.length/2) - 1
      return s.slice(num,-num)
  } 
  if(s.length%2 !== 0) {
    const num = Math.floor((s.length/2) )
    return s.slice(num,-num)
  }
}

console.log(getMiddle("test"))

console.log(getMiddle("testing"))

console.log(getMiddle("middle"))

console.log(getMiddle("A"))