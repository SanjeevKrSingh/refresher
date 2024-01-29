function isPrime(x) {
    for(let i = 2; i < x; i++) {
        if(x % i === 0) return false;
    }
    return true;
}

let result = isPrime(7);
console.log("🚀 ~ result:", result)
