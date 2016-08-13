min = function(a, b) {
  return Math.min(a, b);
};

console.log(min(0, 10));

// → 0

console.log(min(0, -10));

// → -10


function isEven(number) {
  number = Math.abs(number);
  if(number == 0) {
    return "true";
  }
  else if(number == 1) {
    return "false";
  }
  else {
    return isEven(number - 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


function countBs(string) {
  var counter = 0;
  for(var i = 0; i < string.length; i++) {
    if(string.charAt(i) === "B") {
      counter++;
      }
  }
   return counter;
}

function countChar(string, char) {
  var counter = 0;
  for(var i = 0; i < string.length; i++) {
    if(string.charAt(i) === char) {
       counter++;
       }
  }
   return counter;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
