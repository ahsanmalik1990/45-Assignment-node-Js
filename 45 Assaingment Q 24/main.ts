// Quistion no 24

//test for equality and equality with string
const string1: string = "hello"
const string2: string = "world"

console.log(string1 === string2);
console.log(string1 !== string2)
//test using the lower case function

const uppercase: string ="HELLO";
const uppercase2: string ="hello";

console.log(uppercase.toLowerCase() === `lowercase`);

// numerical test involving equality n inequality, greater
//than and less than, greater than or equal to,and Or equal to

const number1: number = 10;
const number2: number = 20;

console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);

console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);

//tast using "and" and "or" oprators

const x: number = 10;
const y: number = 20;
const z: number = 30;

console.log(x <y && y <z);
console.log(x >= y || y >= z);

//test whether an item is in a array 

const array1: number[] = [1,2,3,4,5];
const itemtofind: number = 3;

console.log(array1.indexOf(itemtofind)!== -1);

//test whether an item is in an array


console.log(array1.indexOf(10) === -1);

