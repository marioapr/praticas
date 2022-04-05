 function timeToMixJuice(name) {
let time;
switch(name){
    case 'Pure Strawberry Joy':
    return time = 0.5;
    case 'Energizer':
    return time = 1.5;
    case 'Green Garden':
    return time = 1.5;
    case 'Tropical Island':
    return time = 3;
    case 'All or Nothing':
    return time = 5;
    default:
    return time = 2.5;
}
}

// function limesToCut(wedgesNeeded, limes) {
//   let limesWedges = [];

//   for (let i = 0; i < limes.length; i++) {
//     let wedges = 0;
//     switch (limes[i]) {
//       case 'small':
//         wedges = 6;
//         break;
//       case 'medium':
//         wedges = 8;
//         break;
//       case 'large':
//         wedges = 10;
//         break;
//     }
//     limesWedges.push(wedges);
//   }

//   let i = 0;
//   let wedgesHad = 0;
  
//   while (wedgesHad < wedgesNeeded) {
//     wedgesHad += limesWedges[i];
//     if (i < limesWedges.length) {
//       i++;
//     }
//   }
  
//   return i;
// }


// const limes = [
//     'small',
//     'large',
//     'large',
//     'medium',
//     'small',
//     'large',
//     'large',
//     'medium',
//   ];

// console.log(limesToCut(80,limes))

const orders = [
  'Pure Strawberry Joy',
  'Pure Strawberry Joy',
  'Vitality',
  'Tropical Island',
  'All or Nothing',
  'All or Nothing',
  'All or Nothing',
  'Green Garden',
  'Limetime',
];

function remainingOrders(timeLeft, orders) {
let time = timeLeft
 const rest =orders.reduce(function(a,v, i, arr){

const minutes = timeToMixJuice(v);
let timeRemaning = time -= minutes;
if(timeRemaning >= 0) {
  arr.shift()
}
a = arr
console.log(timeRemaning,minutes)
return a

},[])
return rest
};

console.log(remainingOrders(13, orders))