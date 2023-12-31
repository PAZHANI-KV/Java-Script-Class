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
  action: function () {
    return "Hello World";
  },
  general: function () {
    return `My name is ${this.content.name}`;
  },
};

console.log(anotherObj.content.name);
console.log(anotherObj.about);
console.log(anotherObj.action());
console.log(anotherObj.general());
console.log(anotherObj["male"]);

//another example

const vehicle = {
  door: 2,
  engine: function () {
    return "vroooom";
  },
};

//Inheritance concept is shown below!
console.log(vehicle.engine());

const car = Object.create(vehicle);

console.log(car.engine());

car.wheels = 4;
console.log(car); //The inherited object properties wont show-up when the object is consoled but only the newly added property like the "wheel" here will be displayed when the object car is consoled!

car.engine = function () {
  return "whoosh"; //Rewritting the inheritted property value of the object
};
console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.door);
console.log(tesla.engine());

//another example
const movie = {
  actor: "Kavin",
  music: "ARR",
  director: "Lokesh",
  producer: "Anbu",
};

console.log(Object.keys(movie));
console.log(Object.values(movie));

//using for-in loop to print values of an object in loop is shown below.

for (let job in movie) {
  console.log(movie[job]);
}

for (let job in movie) {
  console.log(`${job}, it's ${movie[job]}`);
}

delete movie.producer;
for (let job in movie) {
  console.log(movie[job]);
} // Now the producer value will not be displayed in the output!

console.log(movie.hasOwnProperty("actor")); //will help to identify if a particular key is existing in an object
console.log(movie.hasOwnProperty("producer"));

//Lets see about destructuring the objects

//destructuring & assigning particular key value of an object to a variable is shown below
const { music: myFavMusicDirector, director: myFavDirector } = movie;
console.log(myFavMusicDirector);
console.log(myFavDirector);

const { actor, music, director } = movie;
console.log(actor);
console.log(music);
console.log(director);

//classes

//Class is basically a template used to create a well structured object

//A normal object without any proper structural organisation is shown below.
const myPizza = {
  size: "medium",
  crust: "original",
  bake: function () {
    return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
  },
};

myPizza.bake();

// Example for well structured object using a class is shown below:

class pizza {
  constructor(typePizza, sizePizza, crustPizza) {
    this.type = typePizza;
    this.size = sizePizza;
    this.crust = crustPizza;
    this.toppings = "olives";
  }
  bake() {
    return console.log(
      `Baking a ${this.size} ${this.type} ${this.crust} crust  with ${this.toppings}`
    );
  }
}

//object 1 executed easily by passing the values into the above class template
const anotherPizza = new pizza("margarita", "medium", "original");

anotherPizza.bake();

//object 2 executed easily by passing the values into the above class template

const anPizza = new pizza("pepperoni", "medium", "original");

anPizza.bake();

// updating any value of an object just by a dot operator is shown below
const pizzaHut = new pizza("pepperoni", "medium", "original");

pizzaHut.toppings = "sausage"; //updating the prefixed topping from olive to sausage by using dot operator
//But technically speaking, updating an object value like this is not a good practice.

pizzaHut.bake();

//So, the best way to change or update some value of an object is by using parameters by getter and setter method.This is explained by a piece of code as shown below

// class phone {
//   constructor(brandPhone, colorPhone){
// this.brand = brandPhone;
// this.color = colorPhone;
// this.model = "15 pro max";
//   }
//   getModel(){
//     return this.model;
//   }
//   setModel(mod){
//     this.model = mod;
//   }
//   cell() {
//     return console.log(`I bought a ${this.brand} branded ${this.color} colored phone of ${this.model} model`)
//   }
// }

// const mobile = new phone("iPhone", "red");
// mobile.setModel("14 plus");

// mobile.cell();

//The following is the same code as above but here we are updating many model name of the mobile in a array which is shown in the following code snippet.

class phone {
  constructor(brandPhone, colorPhone) {
    this.brand = brandPhone;
    this.color = colorPhone;
    this.model = [];
  }
  getModel() {
    return this.model;
  }
  setModel(mod) {
    this.model.push(mod);
  }
  cell() {
    return console.log(
      `I bought a ${this.brand} branded ${this.color} colored phone of ${this.model} model`
    );
  }
}

const mobile = new phone("iPhone", "red");
mobile.setModel("14 plus");
mobile.setModel("15");
mobile.setModel("13 pro");

console.log(mobile.getModel());
mobile.cell();

//The following code snippet explains about creating and linking a child class with its parent class.

//Parent class
class pizzza {
  constructor(sizepizzza) {
    this.size = sizepizzza;
    this.crust = "original;";
  }
  getCrust() {
    return this.crust;
  }
  setCrust(crustPizzza) {
    this.crust = crustPizzza;
  }
}

//Child class
class specialPizzza extends pizzza {
  constructor(sizepizzza) {
    super(sizepizzza);
    this.type = "Margeritta";
  }
  slice() {
    console.log(`our ${this.type} ${this.size} pizza has 8 slices`); //Here, we are accessing this.size from the above parent class and using it in child class.
  }
}
const mySpecialPizzza = new specialPizzza("medium");
mySpecialPizzza.slice();

class iceCream {
  constructor(shapeIceCream) {
    this.shape = shapeIceCream;
    this.flavour = "vannila";
  }
  getFlavour() {
    return this.flavour;
  }
  setFlavour(flavourIceCream) {
    this.flavour = flavourIceCream;
  }
}

//If a property is declared public in a class, then it is accessible by any object outside the class but if a property is declared as private in a class, then it is not accessible  by any object outside the class. This helps in preventing unwanted changes in the properties of a class. Lets see an example below to know about public property and private property.

class dress {
  type = "pant"; //public property
  #color = "blue"; //private property
  constructor(sizeDress) {
    this.size = sizeDress;
  }
  getType() {
    return this.type;
  }
  setSize(dressType) {
    this.type = dressType;
  }
  wearing() {
    return console.log(
      `Im Buying a ${this.#color} color ${this.type} of size ${this.size}`
    );
  }
}

const clothing = new dress("medium");
clothing.wearing();

//JSON(JavaScript Object Notation)

//Lets create an object to discuss about json as shown below

const myObject = {
  name: "Aji",
  hobbies: ["cooking", "Anime", "series", "petting"],
  jerry: function () {
    console.log("Jerry is seven years old");
  },
};
console.log(myObject);

//The following codeline will convert the above object to JSON formate!

const sendJSON = JSON.stringify(myObject);
console.log(sendJSON);

//The following codeline will convert the above json file again to object formate!

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);

//Errors and Error handling
("use strict");

// variable = "Aji"; //Referencr error
const variable = "Aji";
console.log(variable);

//variable = "Hi"; //Type error

// Object..create(); //syntax error

// Sometimes errors like type error and reference error wont be minded by java script and the js will execute the code despite of those errors; which might create problems sometimes. Inorder to handle these errors, we have try catch error handling method. Lets discuss this along with an example code as shown below.

const makeError = () => {
  try {
    const name = "Dhuddu";
    name = "subscribe";
  } catch (err) {
    console.error(err);
    // console.log(err);
    // console.warn(err);
    // console.table(err);
  }
};
makeError();

// Lets create a custom error as shown below

function customError(message) {
  this.message = message;
  this.name = "custom Error";
  this.stack = `${this.name}:${this.message}`;
}

const namasthe = () => {
  try {
    throw new customError("This is a custom error"); //In handling these custom errors, we have to use this "throw" keyword in try column to throw that particular custom error!
  } catch (err) {
    console.error(err.stack);
  }
};

namasthe();

//But there is an inbuilt custom error handling method in js which is by using the keyword "Error". An example for this is given below.

const vanakkam = () => {
  try {
    throw new Error("This is a custom error");
  } catch (err) {
    console.error(err.stack);
  }
};

vanakkam();

// Another example is given below. Here, a method called finally is explained If this "finally" method is used, then this method is the last one to be executed. If try is ececuted then finally will be executed before the code ends and if catch is executed then the finally will be executed before the code ends. Anyhow, the "finally" will be the last one to be executed in the code but it will be executed for sure all the time when the code runs.

const bachaa = () => {
  let i = 0;
  while (i <= 5) {
    try {
      if (i % 2 != 0) {
        throw new Error("odd number");
      }

      console.log("Even number");
    } catch (err) {
      console.error(err.message);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};

bachaa();

