// console.log('1)');
// function sum(input){

//             let total =  0;
//             for (let i = 0; i < input.length; i++)
//               {                  
//                   total += Number(input[i]);
//               }
//              return total;
//             }
//             console.log(sum([2, 2, 3]));
// console.log('-------------------------------------------------------------');
// console.log('2)');
// function average(input) {
//     let total = 0;
//     for (let i = 0; i < input.length; i++) {
//         total += Number(input[i] / input.length);
//     }
//     return total;
// };
// console.log(average([2,4]));
// console.log('---------------------------------------------------------------');
// console.log('3)');
// function greaterThan(input) {
//     let x = 0;
//     let y = 1;
//     if (x < y) {return true;
//     } else {
//         return false;
//     }
// };
// console.log(greaterThan());
// console.log('-------------------------------------------------------------');
// console.log('4)');

// function secondLargest(input) {
//     let array = [2, 1, 3, 4];
//     let fix = array.sort();
//     // console.log(fix);
//     for (i = 0; i < fix.length; i++) {
//         return fix.length[i-1];
//     };
// };
// console.log(secondLargest());
// console.log('-------------------------------------------------------------');
// console.log('5)');
// function containsVowel() {
//     let str = 'There was no way';
//     let contain = str.match(/a/g);
//     let contain2 = str.match(/e/g);
//     let contain3 = str.match(/i/g);
//     let contain4 = str.match(/o/g);
//     let contain5 = str.match(/u/g);
//     if (str = contain) 
//     {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(containsVowel());
// console.log('--------------------------------------------------------');
// console.log('6)');

//     function pigLatin(words) {
//      let characters = words.split('');
//      let firstletter = words[0];
//      characters.push(firstletter);
//      characters.splice(0, 1);
//      characters.push('ay');
//      return characters.join('');
//     }
//  console.log(pigLatin("gorgonzola"));
//  console.log('-------------------------------------------------');
//  console.log('7)');
//  function longestWord(str) {
     
//      let strSplit = str.split(' ');
//      let longest = 0;
//      let wordest = [];
//      for (let i = 0; i < strSplit.length; i++) {
//          if (strSplit[i].length > longest) {
//              longest = strSplit[i].length;
//              wordest = strSplit[i];
//          }
//      }
//      return wordest;

//  }
//  console.log(longestWord("May the force be with you"));
// console.log('-------------------------------------------------------------');
// console.log('11)');
// function weave(x, y) {
//      x = x.split ("");

//     for(let i = y - 1; i < x.length; i = i + y) {
//     x[i] = "x";
//     }
//     return x;
// }
// console.log(weave("bacon", 4));
// console.log('--------------------------------------------------------------');
// console.log('12)');
// let total = 9.99;
// function bonus (amount){
// let bonuses = (amount * .2); 
// amount = amount + bonuses;

// return (amount);
// }
// let answer = Math.ceil(bonus(total));
// console.log(answer)
// console.log('--------------------------------------------------------------');
// console.log('14)');
// function multiples(x, y) {
   
//     let numbaz = _.range(1, 101).filter(function (num) {
//         if (num % x === 0 && num % y === 0) {
//             return true;
//         } else {
//             return false;
//         }
//     });
    // for (let i = 0; i < strNums.length; i++){
        // return numbaz
// }
    // if (strNums % x && strNums % y){
    //     return outputs;
    // } else {
    //     return false;
    // }
    
// console.log(multiples(2, 4));
// console.log('------------------------------------------------------------------');
// console.log('19)');
// let pokemonCaught = [1, 2, 5, 1, 3, 151];

// function pokemon(CatchEmAll){
//     let accumulatedPokemon = [];
//     accumulatedPokemon.push(CatchEmAll[0]);
//     for (let i = 1; i < CatchEmAll.length; i++) {
//         accumulatedPokemon.push(CatchEmAll[i] + accumulatedPokemon[i-1]);
        
//     }
//     return accumulatedPokemon;
// }

// console.log(pokemon(pokemonCaught));

