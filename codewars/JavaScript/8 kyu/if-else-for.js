// - Calculate-BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  var result = weight / (height * height);
  if (result <= 18.5) return "Underweight";
  else if (result <= 25.0) return "Normal";
  else if (result <= 30.0) return "Overweight";
  else return "Obese";
}

console.log(bmi(55, 1.8));

// - CountPositivesSumNegatives
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive;
    else negative += input[i];
  }

  return [positive, negative];
}
console.log(
  countPositivesSumNegatives([
    1, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15, -16,
  ])
);

// - dna
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
  var result = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    } else {
      result += dna[i];
    }
  }
  return result;
}
console.log(DNAStrand("AAAC"));

// - squares-sentece
// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

function squares(x, n) {
  var ret = [];
  for (var i = 0; i < n; i++) {
    ret.push(x);
    x *= x;
  }
  return ret;
}
console.log(squares(2, 6));

// - First Factorial

function FirstFactorial(num) {
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
console.log(FirstFactorial(5));

// - Pythagorean Triple
// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.
// A pythagorean triple is formed when:
// c2 = a2 + b2
// where c is the largest value of a, b, c.
// For example: a = 3, b = 4, c = 5 forms a pythagorean triple, because 52 = 32 + 42
// Jeitos que eu fiz

function isPythagoreanTriple(a, b, c) {
  for (var i = 0; i < a; i++) {
    var resultA = a * a;
  }
  for (var i = 0; i < b; i++) {
    var resultB = b * b;
  }
  for (var i = 0; i < c; i++) {
    var resultC = c * c;
  }
  if (resultA + resultB == resultC) return true;
  else return false;
}
console.log(isPythagoreanTriple(3, 4, 5));

function isPythagoreanTriple(integers) {
  if (
    integers[0] * integers[0] + integers[1] * integers[1] ==
    integers[2] * integers[2]
  )
    return true;
  else return false;
}
console.log(isPythagoreanTriple(3, 4, 5));

// - Even-Or-Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
console.log(even_or_odd(4));

// - ReturnNegative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  return num > 0 ? -num : num;
}
console.log(makeNegative());

// - Training JS #7: if..else and ternary operator
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
// number -	price (cents)
// n < 5 - 100
// n >= 5 and n < 10 - 95
// n >= 10 - 90

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}
console.log(saleHotdogs(6));

// - Will you make it?
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft ? true : false;
};
console.log(zeroFuel(50, 25, 2));

// - Beginner - Reduce but Grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

const grow = (x) => {
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
};

console.log(grow([5, 2, 3]));

// Goals: 1. Finds all the prime numbers between 1 and 1000. 2. Sums all the prime numbers that you found between 1 and 1000. 3. The `main` function should return the sum of all prime numbers. Develop the solution entirely on this editor.

// Javascript Program to compute sum
// of prime number in a given range

// Method to compute the prime
// number Time Complexity is O(sqrt(N))
function checkPrime(numberToCheck) {
  if (numberToCheck == 1) {
    return false;
  }
  for (let i = 2; i * i <= numberToCheck; i++) {
    if (numberToCheck % i == 0) {
      return false;
    }
  }
  return true;
}

// Method to iterate the loop from l to r
// If prime number detects, sum the value
function primeSum(l, r) {
  let sum = 0;
  for (let i = r; i >= l; i--) {
    // Check for prime
    let isPrime = checkPrime(i);
    if (isPrime) {
      // Sum the prime number
      sum = sum + i;
    }
  }
  return sum;
}

let l = 1,
  r = 7;

// Call the method with l and r
console.log(primeSum(l, r));

// - String repeat
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  var result = "";
  for (var i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

console.log(repeatStr(6, "6"));

// - Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  var word = "";
  for (var i = 1; i < str.length - 1; i++) word += str[i];
  return word;
}
console.log(removeChar("world"));

// - Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  var result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};
console.log(summation(2));
