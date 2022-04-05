function smash (words){
return words.join(' ').toString().trim();
}

const words = ['hello', 'world', 'this', 'is', 'great'] ;
console.log(smash(words))