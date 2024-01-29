function myNewFunctions (input1, input2) {
    return input1 + input2;
}

const add = myNewFunctions(5, 5);

function isEven(num) {
    if(num % 2 === 0) return true;
    return false;
}

const x = 10;
if(isEven(x)) {
    console.log('Even');
}else {
    console.log('Odd');
}

for(let i = 0; i <= 20; i++) {
    let result = isEven(i);
    if(result) {
        console.log('Even');
    }else {
        console.log('Odd');
    }
}

//some logic
let a = 10;
let b = 20;
let c = 30;

if(isEven(a)) {
    console.log('Even');
}else {
    console.log('Odd');
}

if(isEven(b)) {
    console.log('Even');
}else {
    console.log('Odd');
}

if(isEven(c)) {
    console.log('Even');
}else {
    console.log('Odd');
}


//Even or Odd

function isEvenOrOdd(num) {
    if(num % 2 == 0) {
        return "Even";
    }else {
        return "Odd";
    }
}

console.log(`10 is ${isEvenOrOdd(10)}`);
console.log(`20 is ${isEvenOrOdd(20)}`);
console.log(`30 is ${isEvenOrOdd(30)}`);