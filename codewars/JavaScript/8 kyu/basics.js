// typeof 
// - Super Duper Easy
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

function problem(x) {
  //your code here
  return typeof x == "string" ? "Error" : x * 50 + 6;
}
console.log(problem(1));

// loop array (for) com .push

function preFizz(n) {
  var list = [];
  for (var i = 1; i <= n; i++) {
    list.push(i);
  }
  return list;
}
console.log(preFizz(5));
