
// let numdays = 130;
// const num = numdays % 22;

// console.log(num);

// function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
//     const dayRate = ratePerHour * 8;
//     const dayRemain = numDays % 22;
//     const monthRate = (numDays - dayRemain) * dayRate;
//     const dayRemainRate = dayRemain * dayRate;
//     const result = (monthRate - (discount * monthRate)) + dayRemainRate;
//     return result;
// };

// const teste = priceWithMonthlyDiscount(16, 70, 0);
// //8960
// const teste2 = priceWithMonthlyDiscount(16, 130, 0.15)
// //14528
// console.log(teste);
// console.log(teste2);

function frontDoorPassword(word) {
    const wordStart = word[0]
    let wordEnd = word.slice(1, word.length)
     let wordLower = wordEnd.toLowerCase()
// console.log(wordStart,wordLower)

    return wordStart.concat(wordLower);
  };

  const testWord = 'SUMMER';

//   console.log(frontDoorPassword(testWord))


  function backDoorResponse(line) {
    const lineTrim = line.trimEnd();
  return lineTrim[lineTrim.length-1]
};

// console.log(backDoorResponse(testWord))

function backDoorPassword(word) {
    const upperWord = word.toUpperCase();
    return upperWord.concat(', please.')
   }

   console.log(backDoorPassword(testWord))