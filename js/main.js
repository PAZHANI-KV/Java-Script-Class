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
let winner =
  arun === raj
    ? "Tie"
    : arun === "rock" && raj === "paper"
    ? "raj wins"
    : arun === "paper" && raj === "scissors"
    ? "raj Wins"
    : arun === "scissors" && raj === "rock"
    ? "raj wins"
    : "arun wins";
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

// example1
let i = 0;
while (i < 50) {
  console.log(i);
  i = i + 1;
}

// Do-While loop

// example1
let j = 50;
do {
  console.log(j);
  i = i + 10;
} while (j < 50);

// for loop

// example1
for (k = 0; k <= 10; k++) {
  console.log(k);
}

// example2
let name = "Pazhani";
for (let i = 0; i <= name.length; i++) {
  console.log(name.charAt(i));
}

// nested loop

// example1
let petName = "Jerry";
for (let l = 0; l <= name.length; l += 2) {
  for (let m = 0; m <= name.length; m += 2) {
    console.log(l, m);
  }
}

// the fololwing two examples will tell the differnce between break and continue

//Example for break
let n = 0;
while (n < 6) {
  if (n === 3) {
    break;
  }
  n = n + 1;
}

console.log(n);

// Example for continue
let text = "";
for (let o = 0; o < 10; o++) {
  if (o === 3) {
    continue;
  }
  text = text + o;
}
console.log(text);

// Functions(The main advantage of using a function is that it should be reuseable; so that we can use that function as many times as we want to call different paramaters at different place in a code)

// example1
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 2));
console.log(sum(2, 3));
console.log(sum(2, 4));

// example2
function sum(a, b) {
  console.log(a);
  console.log(b);
  if (b == undefined) {
    return a;
  }
  return a + b;
}
console.log(sum(2));

// example3
function getUserName(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserName("pazhanivel11111@gmail.com"));

// example4
function toProperCase(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("paZHAnI"));

// example5
var toProperCase = function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("paZHAnI"));

//scope var, let, const

//global scope
// (available globally throughout the code)
var x = 1;
let y = 2;
const z = 3;

//local scope(block scope)
// (available only inside a particular block of code)
{
  let y = 4;
}

//local scope //function scope

function myFunc() {
  const z = 5;
  console.log(z);
}
myFunc();

// another example to explain about global and local scope

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function func() {
  const z = 7;
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);

  if (true) {
    let y = 9;
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
}
func();

//Arrays

const myArray = [];
myArray[0] = "Aji";
myArray[1] = "Pazhani";
myArray[2] = 222;
myArray[3] = true;

console.log(myArray);

console.log(myArray.length);

console.log(myArray[1]);

console.log(myArray[myArray.length - 1]);

myArray.push("click");
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift("Jerry");
console.log(myArray);

myArray.shift();
console.log(myArray);

myArray.splice(2, 1);
console.log(myArray);

myArray.splice(2, 1, 5);
console.log(myArray);

myArray.splice(1, 0, "Senthil");
console.log(myArray);

myArray.reverse();
console.log(myArray);

const hello = myArray.join();
console.log(hello);

const hi = hello.split(",");
console.log(hi);

const newArray = myArray.slice(1, 3);
console.log(newArray);

const array1 = [1, 2, "aji", "hey"];
const array2 = [66, 78, "apple"];

const array3 = array1.concat(array2);

console.log(array3);

const array4 = [...array1, ...array2];
console.log(array4);

const array5 = [1, 2, 3];
const array6 = [4, 5, 6];
const array7 = [array5, array6];

console.log(array7);
console.log(array7[0][1]);

//objects

const myObj = {
  name: "Aji",
};

console.log(myObj);

const anotherObj = {
  male: true,
  money: 10000,
  content: {
    name: "Pazhani",
    age: 26,
  },
  about: ["Left hander", "65kg", "179cm"],
  action: function() {
    return "Hello World";
  },
  general: function() {
    return `My name is ${this.content.name}`
  },
};

console.log(anotherObj.content.name);
console.log(anotherObj.about);
console.log(anotherObj.action());
console.log(anotherObj.general());
console.log(anotherObj["male"]);

//another example

const vehicle = {
  door:2,
  engine:function(){
    return "vroooom";
  }
};

//Inheritance concept is shown below!
console.log(vehicle.engine());

const car = Object.create(vehicle);

console.log(car.engine());

car.wheels = 4;
console.log(car); //The inherited object properties wont show-up when the object is consoled but only the newly added property like the "wheel" here will be displayed when the object car is consoled!

car.engine = function(){
  return "whoosh"; //Rewritting the inheritted property value of the object
}
console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.door);
console.log(tesla.engine());

//another example
const movie = {
  actor: "Kavin",
  music: "ARR",
  director: "Lokesh",
  producer: "Anbu"
};

console.log(Object.keys(movie));
console.log(Object.values(movie));

