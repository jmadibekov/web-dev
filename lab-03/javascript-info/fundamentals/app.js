"use strict";

console.log("I'm JavaScript");

let admin, userName;
userName = "John";
admin = userName;
console.log(admin);

console.log(typeof null);

// name = prompt("Your name?", "Don't know");
// alert(`Your name: ${name}`);

if ("0") {
  console.log("It is true!");
}

let a = 3,
  b = 4;
let result = a + b < 4 ? "Below" : "Over";
console.log(result);

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

let n = 20;
for (let i = 2; i <= n; i++) {
  if (isPrime(i)) {
    console.log(`prime = ${i}`);
  }
}

// let enteredNumber = +prompt("a?", "");
// switch (enteredNumber) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2, 3");
// }

// arrow functions
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
