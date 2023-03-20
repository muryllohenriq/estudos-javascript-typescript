// - cockroach
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  // 1 = 100000
  // 1 = 3600
  return Math.trunc((s * 100000) / 3600);
}

console.log(cockroachSpeed(1.09));

// - Difference-of-Volumes-of-Cuboids
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.

function findDifference(a, b) {
  return Math.abs(
    a.reduce((previous, current) => previous * current) -
      b.reduce((previous, current) => previous * current)
  );
}
console.log(findDifference([3, 2, 5], [1, 4, 4]));

// - Keep-Hydrated!
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.trunc(time * 0.5);
}
console.log(litres(1));

// - Find Maximum and Minimum Values of a List
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
console.log(max([2, 3]));

// - Parse nice int from char problem
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
// Write a program that returns the girl's age (0-9) as an integer.
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString) {
  return parseInt(inputString);
}
console.log(getAge("1 years old"));

// - Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks) {
  var number = 0;
  for (var i = 0; i < marks.length; i++) {
    // faz um loop pelo array
    number += marks[i]; // soma os valores do array e salva em "number"
  }
  return Math.floor(number / marks.length); // Math.floor() arredonda o número pra baixo
}
console.log(getAverage([1, 5, 87, 45, 8, 8]));

// - Count the number of cubes with paint on
// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.
// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.
// Examples:
// countSquares(1) --> 8
// countSquares(2) --> 26
// countSquares(4) --> 98

const countSquares = (cuts) => (cuts === 0 ? 1 : 6 * cuts * cuts + 2);

console.log(countSquares(1));

// - Quarter of the year
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  return Math.ceil(month / 3);
};
console.log(quarterOf(7));

// - Alan Partridge II - Apple Turnover
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

function apple(x) {
  return Math.pow(x, 2 > 1000) ? 'It\'s hotter than the sun!!' : "Help yourself to a honeycomb Yorkie for the glovebox."
}
console.log(apple(100));