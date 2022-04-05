function calculateResellPrice(originalPrice, age) {
    if(age < 3) return originalPrice * 0.8;
    if(age > 3 && age < 10 ) return originalPrice * 0.7;
    if(age > 10 ) return originalPrice * 0.5;
}
console.log(40000*0.8)
console.log(calculateResellPrice(40000,3))