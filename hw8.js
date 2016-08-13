// console.log('SUM OF ALL FEARS');

// let answer = [1, 2, 3].reduce(add, 0);

// function add(a, b) {
//     return a / b;
// }

// console.log(answer);

// console.log('----------------------------------------------------------')

// console.log('Average Joe');
// function mean(numerals) {
    
// let total = 0;
// for(let i = 0; i < numerals.length; i++) {
//     total += numerals[i];
//     }
 
// let avg = total / numerals.length;

// return avg;
// }
//     console.log(mean([10, 5, 15,]));
// console.log('--------------------------------------------------------');

// console.log('Greater Than')

// function greater(first, second) {
//     if(first < second) {
//         return true;
//     } else {
//         return false;
//     }
// } 
//    console.log(greater(1, 2));

// console.log('-------------------------------------------------------------');

//     console.log('Second Largest');
//     function second(larger, second) {
//     if(larger > second) {
//         return second ;
//     } else {
//         return larger;
//     }
    
// } 
//    console.log(second(1, 2));

    // console.log('-------------------------------------------------------------');
    // console.log('Conatians Vowel');
    // let str = "The man went to the store to buy some milk."; 
    // let res = str.match(/a /g);
    // function vowel(matches) {
    //     if(res = str) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // console.log(vowel(str, res));

    console.log('-------------------------------------------------------------');
    console.log('Piglatin');
    function translate(str) {
     str=str.toLowerCase();
     let n =str.search(/[aeiuo]/);
     switch (n){
       case 0: str = str+"way"; break;
       case -1: str = str+"ay"; break;
       default :
         str=str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
       break;
    }
    return str;

}


 console.log(translate("waffles"));