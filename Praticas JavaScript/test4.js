//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

function countPositivesSumNegatives(input) {
    return input && input.length ? input.reduce(function(a,v,){
    v <= 0 ? a[1] += v : a[0]+= 1;
    return a
    },[0,0]):[]}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
console.log(countPositivesSumNegatives(array))