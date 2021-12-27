// ES7 Features
// There are two update in ES7 

// 1. Array.prototype.includes()
// 2. Exponentiation Operator

// Array includes()
// check to see if something is inside an array
// Method returns a Boolean value


let a = ["Akshay", "Suraj", "Nitin", "Somil"];

let name1 = 'Shankar';
let name2 = 'Akshay';

let hasShankar = a.includes(name1);
let hasAkshay = a.includes(name2);

console.log(hasShankar); // false
console.log(hasAkshay); // true


let marks = [50,60,70,80]
   //check if 50 is included in array
   if(marks.includes(50)){
      console.log('found element in array')
   }else{
      console.log('could not find element')
   }
   // output: found element find element

   
   // check if 50 is found from index 1
   if(marks.includes(50,1)){ //search from index 1
      console.log('found element in array')
   }else{
      console.log('could not find element')
   }
   // output : could not find element

   
   // check Not a Number(NaN) in an array
   console.log([NaN].includes(NaN)) // true

   
   // create an object array
   let user1 = {name:'kannan'},
   user2 = {name:'varun'},
   user3={name:'prijin'}
   let users = [user1,user2]

   // check object is available in array
   console.log(users.includes(user1)); // true
   console.log(users.includes(user3)); // false


   // ------------------------------------------------

//   Exponentiation Operator
// The exponentiation operation (**) raises the first operand to the power of the second operand.

// console.log(5 ** 3); // 125

// let a = 5; 
// let b = 3;

// console.log(5 ** 3); // 125