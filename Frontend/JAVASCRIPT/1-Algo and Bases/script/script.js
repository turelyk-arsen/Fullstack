/*
   Multiple line 
   of comment
*/

// One line comment
// help you to disable a line of code

// TO show off

/*************************
 ****Decoration***********
 ************************/

// * Important information is highlighted
// ! Deprecated method, DO NOT USE
// ? Should this method exposed in the public
// TODO : change this function so that it do this

// Already defined FUNCTION

// [2 input] - [3 OUTPUTS]

// INPUT : prompt("sentence");
// const name = prompt('Enter your name');

// INPUT : confirm('question');
// const legal = confirm('Are you above 18?');

// OUTPUT : alert('message');
// alert('Hello!');

// OUTPUT : document.write('<h2>ok</h2>);
document.write("<h2>ok</h2>");

// OUTPUT for the devs : console.log('');
console.log("I'm a dev now");

// VARIABLES
const teacher = "Gabriel"; // Declaration + Assignment
// teacher = 'Tiago'; ERROR
let age; // Declaration
age = 39; // assignment / initialisation
age = 40;
let lastName = "Abreu"; // use camelCase
// console.log('teacher');
// console.log(teacher);
// console.log(age);

// don't use VAR
// Var is for loser
// * you have to use "const" and "let"

// const email = prompt('Enter your email');
// alert("Thank you, we will spam the email : " + email);

const fullName = teacher + lastName;
console.log(fullName);

/**************
 * ***Types***
 * ********** */

//Default

let friends;
console.log(friends);
friends = null; //null a dev choose to resert the value

// string - sentence, words, letters set of chars.
friends = "Timmy";
friends = "Timmy's girlfriend";
console.log(friends);
// -> allowed operation : concatenation
friends = "gabriel" + " " + "Abreu";
console.log(friends);

// Numbers - ...
let temperature = 15.6;
temperature = -10;
temperature = 2 / 3;
console.log(temperature);
temperature = 1.4 + 1.2; // it's a computer, with it's fails
console.log(temperature);
// let temperature = 1000;

let score = 0;
score = score + 1;
score += 1;
score ++;
console.log(score);

score -=1;
score *=1;
score /=1;
score --;

// Boolean : true and false
const teacherIsGood = true;
const luxIsSunny = false;
const notGood = 'false'; // this is not a boolean, this is a string
console.log(notGood);

// Falsy : false, 0, null, undefined, NaN (not a Number)
// Truthy : everything else

// Smart Typing 
console.log('1' + 9);
console.log(9 + '1');

//from number to string
const money = '' + 1 || (1).toString();
// from string to number 
const currency = + '9' || Number('9');
console.log(currency);

let budget = 10;
let sandwich = 4;
// solution: Become sherlock holmes
debugger;
budget = budget + sandwich;
console.log(budget);


