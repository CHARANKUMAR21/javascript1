// 1. Variables
// Create 3 variables using var, let, const keywords and log the result in the console.

var x = 143;
let y = "hello man....";
const z = 7815864934;

console.log(x);
console.log(y);
console.log(z);
// ----------------------------------------------------------------------------------------------
// 2. Variable Names
// Which of the following variable names are valid in JavaScript? Explain why.
// total-amount
// 2ndPlace
// _userID
// $discount
// var
// myVariable

// total-amount---(this is invalid because(-) is invalid in variables)
// 2ndPlace--------(this ia invalid variables should not start with number)
// _userID--------(this is valid username can start with (_)underscore symbol)
// $discount------(this ia valid variables can start with symbol)
// var --- --------(this is invalid var is not used as keyword in variables)
// myVariable------(this is valid we can write var in camelcase)

// -------------------------------------------------------------------------------------------
// 3. Data Types Introduction
// ○ Declare variables of different data types: string, number, boolean, undefined, and null.
// ○ Print each variable and its type using console.log and the typeof operator

let hello = "HELLO everyone welcome to JavaScript";
let num = 123456;
let boolean = true;
let a;
let b = null;
console.log(typeof hello);
console.log(typeof num);
console.log(typeof boolean);
console.log(typeof a);
console.log(typeof b);
// let hello = ("HELLO everyone welcome to JavaScript");
// let num = 123456
// console.log( Boolean(num));
// let num1 = null;
// console.log(Boolean(num1));
console.log(a);
console.log(b);
// -----------------------------------------------------------------------------------------
// 4. DataTypes
// What is the data type of each value? Write them down:
// "42"
// 42
// true
// undefined
// ["apple", "banana"]
// null

let in1 = "42";
console.log(typeof in1);
// "42"----is a type of String

let in2 = 42;
console.log(typeof in2);
// 42 ---- is a type of number

let boolean1 = true;
console.log(typeof boolean1);
// true----it is type of boolean

let a1;
console.log(typeof a1);
// undefined ----not assigned any value to a1

let fruits = ["apple", "banana"];
console.log(typeof fruits);
//it is a type of object

let n1 = null;
console.log(typeof n1);
// it is also a type of object

// ------------------------------------------------------------------------------------

// 5. Data Type Checking
// Use typeof to find the data type of:
// - "Hello World"
// - 42
// - true
// - [1, 2, 3]
// - undefined

let p5a = "Hello World";
console.log(typeof p5a);
// it is type of string

let p5b = 42;
console.log(typeof p5b);
// 42 ---- is a type of number

let p5c = true;
console.log(typeof p5c);
// true----it is type of boolean

let p5d = [1, 2, 3];
console.log(typeof p5d);
// it is a type of object

let p5e = undefined;
console.log(typeof p5e);
// undefined ----not assigned any value to p5e

// ----------------------------------------------------------------------------------------------
 /*
 6. Strings
 Create a variable with your first name and another with your last name. How can you combine
 them to create your full name with a space in between?
 */

let firstname = "CHARAN KUMAR";
let lastname = "BOMMAKANTI";

console.log(firstname + " " + lastname);

//CHARAN KUMAR BOMMAKANTI

// ----------------------------------------------------------------------------------------

/*
 7. Simple Math
 Create a variable named marks = 35
 Add 2 to it
 Subtract 5 from it
 Multiply it by 2
 Divide it by 2
 modules it by 2
*/

let score = 35;
console.log(score + 2);
console.log(score - 5);
console.log(score * 2);
console.log(score / 2);
console.log(score % 2);

// 37
// 30
// 70
// 17.5
// 1

// ------------------------------------------------------------------------------------------------

/* 8. Basic Console
 Write code to display "Hello, JavaScript!" in the console in three different ways.*/

console.log("Hello, JavaScript!");
console.warn("Hello, JavaScript!");
console.info("Hello, JavaScript!");
console.error("Hello, JavaScript!");

// ------------------------------------------------------------------------------
/*
9. Comments
Write a single-line comment and a multi-line comment about what you've learned in JavaScript
so far.
*/

// this is a single line comment........................

/*
  This is a also multi-line comment.
  You can write comments over multiple lines.
  It's useful for longer explanations or disabling blocks of code.
*/

// ---------------------------------------------------------------------------------------------
/*
10. Assignment Operators
Predict the final value of variable number after these operations:
let number = 10;
number += 5;
number *= 2;
number -= 7;
number /= 3;
number %= 4;
*/
let number = 10;
console.log((number += 5)); //15
console.log((number *= 2)); //30
console.log((number -= 7)); //23
console.log((number /= 3)); //7.6666666666667
console.log((number %= 4)); //3.6666666666667

// ----------------------------------------------------------------------------
/*
11. Assignment Operators
What will the values of k, l, p, and q be after this code runs?
let k = 5;
let l = k++;
let p = 5;
let q = ++p;
*/

let k = 5;
let l = k++;
console.log(l); //5
let p = 5;
let q = ++p;
console.log(q); //6
// ------------------------------------------------------------------------------------------
/*  
12. Comparison Operators
Use comparison operators (==, ===, !=, !==, >, <, >=, <=) to compare two variables of the same
and different data types. Print the results of each comparison.
*/

let A = 123;
let B = 456;
let m = 45;
let n = 45;
console.log(A == B); //false
console.log(m === n); //true
console.log(m != n); //false
console.log(A !== B); //true
console.log(A > B); //false
console.log(A < B); //true
console.log(A >= B); //false
console.log(A <= B); //true
// ------------------------------------------------------------------------------------------------------------
// The end
