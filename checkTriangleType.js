let a = 11, b = 12, c = 10;

if(a == b && a == c && b == c) {
    console.log('Equilateral');
}else if(a != b && a != c && b != c) {
    console.log('Scalene');
}else {
    console.log('Isosceles');
}