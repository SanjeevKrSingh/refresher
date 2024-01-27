//Arithematic Operators
let x = 10;
let y = 3;
console.log(x + y); //addition
console.log(x - y); //subtraction
console.log(x * y); //multiplication
console.log(x / y); //division
console.log(x % y); //modulus
console.log(y ** 2); //exponent

//Assignment Operators

let a = 10;
a += 10; // a = a + 10
console.log(a);
a -= 2;
console.log(a);
a %= 4;
console.log(a);
a *= 10;
console.log(a);
a -= 3;
console.log(a);
a **= 2;
console.log(a);

// Relational Operators

let x1 = 10;
let y1 = 20;
let z1 = 30;

console.log(x1 < y1);
console.log(y1 > z1);
console.log(x1 <= y1);
console.log(x1 >= y1);

//Logical Operators

let l1 = 10;
let l2 = 20;
let l3 = false;

console.log("AND", l1 && l2);
console.log("AND", l2 && l1);
console.log(l1 || l2);
console.log(!l1);
console.log(!!l3);

console.log((-10 / null));
console.log(undefined / null);
console.log(10 / "Hello");

console.log(+0);
console.log(-0);
console.log(NaN);
console.log(Infinity);
console.log(-Infinity);
console.log(10 < Infinity);

// Equality operators

console.log(1 == "1");
console.log(1 == "Sanjeev");