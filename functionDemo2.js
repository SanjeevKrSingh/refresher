function isEvenOrOdd(num) {
    if(num % 2 == 0) {
        return "Even";
    }else {
        return "Odd";
    }
}

//check which number are odd and which are even between 1 - 50

for(let i = 1; i <= 50; i++) {
    console.log(i + " is " + isEvenOrOdd(i));
}