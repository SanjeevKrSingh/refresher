function printPattern1(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= n; j++) {
            str += "* ";
        }
        console.log(str);
    }
}
// printPattern1(5);

function printPattern2(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += "* ";
        }
        console.log(str);
    }
}
// printPattern2(5);

function printPattern3(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = i; j < n; j++) {
            str += " ";
        }
        for (let j = 1; j <= i; j++) {
            str += "*";
        }
        console.log(str);
    }
}
// printPattern3(5);

function printPattern4(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = i; j < n; j++) {
            str += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            str += "*";
        }
        console.log(str);
    }
}

// printPattern4(5);

function printPattern5(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = i; j <= n; j++) {
            str += "*";
        }
        console.log(str);
    }
}

// printPattern5(5);

function printPattern6(n) {
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < n - i - 1; j++) {
            str += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {

            str += "*";
        }
        for (let j = 0; j < n - i - 1; j++)
        {
            str += " ";
        }
        console.log(str);
    }

    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += " ";
        }
        for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
            str += "*";
        }
        for (let j = 0; j < i; j++)
        {
            str += " ";
        }
        console.log(str);
    }
}

printPattern6(3);