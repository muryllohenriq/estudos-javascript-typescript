// Create a function that returns the CSV representation of a two-dimensional numeric array.
// Example:
// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]]
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

function toCsvText(array) {
  return array.join("\n");
}
console.log(
  toCsvText([
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);

// - String-Templates-Bug-Fixing #5
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

const buildString = (...template) => `I like ${template.join(", ")}!`;

console.log(buildString("Cheese", "Milk", "Chocolate"));

// - Filter-out-the-geese
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((b) => !geese.includes(b));
}
console.log(gooseFilter(["African", "Muryllo"]));

// - Enumerable Magic #4 - True for None?
// Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

function none(arr, fun) {
  return !arr.some(fun);
}
console.log(
  none([10], function (item) {
    return item > 9;
  })
);

// - Pythagorean Triple
// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.
// A pythagorean triple is formed when:
// c2 = a2 + b2
// where c is the largest value of a, b, c.
// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42

function isPythagoreanTriple(integers) {
  let massiv = integers.sort((a, b) => a - b);
  return massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2;
}
console.log(isPythagoreanTriple([2, 3, 5]));

// - Invert values
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// - arrow function e function .map
const invert = (array) => array.map((num) => -num);
// -----------------------------------------------
function invert(array) {
  return array.map((e) => e * -1);
}
// - .push
function invert(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}

// - Find Multiples of a Number
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

function findMultiples(integer, limit) {
  let result = [];
  for (let i = integer; i <= limit; i += integer) result.push(i);
  return result;
}
console.log(findMultiples(5, 25));

// - Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = (x) => x.reduce((a, b) => a * b);

console.log(grow([5, 2, 3]));

// - Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar("world"));

// - Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks) {
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
}
console.log(getAverage([1, 2, 3]));

// - Pre-FizzBuzz Workout #1
// This is the first step to understanding FizzBuzz.
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// Your expected output is an array of positive integers from 1 to n (inclusive).
// Your job is to write an algorithm that gets you from the input to the output.

function preFizz(n) {
  var list = [];
  for (var i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
}
console.log(preFizz(5));

// - Is there a vowel in there?
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

const isVow = (a) =>
  a.map((x) => ("aeiou".includes((y = String.fromCharCode(x))) ? y : x));

console.log(isVow([1, 2, 3, 97]));

// - Gravity Flip
// Examples (input -> output:
//   * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
//   * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

const flip = (d, a) => {
  if (d == "R") {
    return a.sort((a, b) => a - b);
  }
  if (d == "L") {
    return a.sort((a, b) => b - a);
  }
};
console.log(flip("L", [3, 2, 1]));

// - Reversed Words
// DESCRIPTION:
// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.
// Example(Input --> Output):
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords("yoda doesn't speak like this"))