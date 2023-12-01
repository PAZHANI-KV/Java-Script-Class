//Strings
myVariable = "Mathematics";

//Length Property of a String
console.log(myVariable.length);

//string methods
console.log(myVariable.charAt(0));

console.log(myVariable.indexOf("at"));

console.log(myVariable.lastIndexOf("at"));

console.log(myVariable.slice(5, 8));

console.log(myVariable.toUpperCase());

console.log(myVariable.toLowerCase());

console.log(myVariable.includes("mat"));

console.log(myVariable.split("e"));

console.log("My name is Pazhani".split(" "));

console.log("How are you?".split(""));

//Refer MDN for more string methods of js.

//Now we will see about Number methods

const myString = "423.42345";
const myNumber = 5;
const myFloat = 42.0;

console.log(myNumber);

console.log(Number(myString));

console.log(Number(true));

console.log(Number.isInteger(2));

console.log(Number.isInteger(myString));

console.log(Number.parseFloat(myString));

console.log(Number.parseFloat(42.08));

console.log(Number.parseInt(43.45));

console.log(Number.parseFloat(myString).toFixed(2));

console.log(typeof Number.parseFloat(myString).toFixed(2));

//The following is called chaining
console.log(parseFloat(myString).toFixed(3).toString());

//Let us learn about isNan now. isNan can be written in two ways as shown
Number.isNaN();
isNaN();

console.log(Number.isNaN("42"));
console.log(isNaN("hi"));

//Let us learn about math methods and properties now

console.log(Math.PI);

console.log(Math.trunc(Math.PI));

console.log(Math.round(Math.PI));

console.log(Math.round(4.8));

console.log(Math.ceil(4.1));

console.log(Math.floor(4.8));

//The following method is  about 3 to the power of 4
console.log(Math.pow(3, 4));

console.log(Math.min(10, 3, 6, 5, 88));

console.log(Math.max(10, 3, 6, 5, 88));

console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

// A small Logic to print any random letter from my name
const myName = "Pazhani";
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));

//IF statements

// example 1
let apple = "My name is Aji";
let ball;

if (apple) {
  ball = `Hi, ${apple}`;
} else {
  ball = "Sorry";
}

console.log(ball);

// example 2
// let customerIsBanned = true;
// let viewer = "JS course";
// let reply;

// if (customerIsBanned) {
//   reply = "Sorry you are banned";
// } else if (viewer) {
//   reply = `Enjoy this ${viewer}`;
// } else {
//   reply = "Loading the JS course";
// }

// console.log(reply);

// example 3
let customerIsBanned = false;
let viewer = "JS course";
let reply;
let finance = true;

if (customerIsBanned) {
  reply = "Sorry you are banned";
} else if (viewer && finance) {
  reply = `Enjoy this ${viewer} & finance content`;
} else if (viewer) {
  reply = `Enjoy this ${viewer}`;
} else {
  reply = "Loading the JS course";
}

console.log(reply);

// example 4
let testScore = 80;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else {
  grade = "c";
}

console.log(grade);

// example 5
let score = 58;
let rank;
let collegeStudent = true;

if (score >= 90) {
  rank = "A";
} else if (score >= 80) {
  rank = "B";
} else if (score >= 70) {
  rank = "C";
} else if (score >= 60) {
  rank = "D";
} else {
  if (collegeStudent) {
    rank = "RA";
  } else {
    rank = "F";
  }
}

console.log(rank);

//Switch statements

//Syntax of Switch:

// switch(expressions or values) {
//   case choice1:
//     run code
//     break;

//     case choice2:
//       run different code
//       break;

//       default:
//       run different code
// }

// example 1:
switch (2) {
  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  default:
    console.log("No Match");
}

// example 2:
switch (Math.floor(Math.random() * 4)) {
  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  default:
    console.log("No Match");
}

// example 3:
// let player = "rock";
// let computer = "rock";

//  switch (player) {
//   case computer:
// console.log("Tie!");
// break;

// default:
//   console.log("No Tie!");

//  }

// example 4:
let player = "rock";
let computer = "scissors";

switch (player) {
  case computer:
    console.log("Tie!");
    break;

  case "rock":
    if (computer === "scissors") {
      console.log("Player Wins!");
    } else {
      console.log("Computer Wins!");
    }
    break;

  default:
    console.log("No Tie!");
}

// Ternary Operators(Conditional operator)(Only operator in js which takes three operands)

//Syntax: condition ? exprIfTrue :exprIfFalse

//example1
let subscriber = "Subscribed";
let response = subscriber ? "Welcome" : "Kindly Subscribe";
console.log(response);

//example2
let testMark = 90;
let rankk =
  testMark > 89 ? "A" : testMark > 79 ? "B" : testMark > 69 ? "C" : "D";
console.log(rankk);

//example3
let arun = "rock";
let raj = "paper";
let winner = arun === raj ? "Tie" : arun === "rock" && raj === "paper" ? "raj wins" : arun === "paper" && raj === "scissors" ? "raj Wins" : arun === "scissors" && raj === "rock" ? "raj wins" : "arun wins";
console.log(winner);

// let myBoolean = alert("Hi Subscribers");
// console.log(myBoolean);

// let myBoolean = confirm("Hi subscribers");
// console.log(myBoolean);

// let myBoolean = prompt();
// console.log(myBoolean);

// The following two lines of prompt code is called null collasking which is used to tackle the null display which is shown in the above two lines of prompt code.
// let myBoolean = prompt();
// console.log(myBoolean ?? "You didnt entered your name");

// let my = prompt("Enter your name:");
// if (my) {
//   console.log(my ?? "You didnt't entered your name");
// } else {
//   console.log("You didn't entered your name");
// }
// console.log(my.length);
// console.log(my.trim().length);

//Loops

//1.While Loop

