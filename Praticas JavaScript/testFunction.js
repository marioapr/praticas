// function solution(str){
//   const strReverse = Array.from(str).reverse()
//  return strReverse.join()
// }

// const str = 'wolrd';

// console.log(solution(str))

function countSheeps(arrayOfSheep) {
   return arrayOfSheep.filter(Boolean).length
  }

  const sheeps = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

    console.log(countSheeps(sheeps))