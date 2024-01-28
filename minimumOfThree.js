let x = 11, y = 10, z = 1;

if(x < y) {
    if(x < z) {
        console.log(x + " is Smaller");
    }else {
        console.log(z + " is Smaller");
    }
}else if(y < x) {
    if(y < z) {
        console.log(y + " is Smaller");
    }else {
        console.log(z + " is Smaller");
    }
}else {
    if(x < z) {
        console.log(x + " is Smaller");
    }else if(y < z) {
        console.log(y + " is Smaller");
    }else {
        console.log(z + " is Smaller");
    }
}

//2nd approach

if(x < y && x < z) {
    console.log(x + " is Smaller");
}else if(y < z && y < z) {
    console.log(y + " is Smaller");
}else {
    console.log(z + " is Smaller");
}