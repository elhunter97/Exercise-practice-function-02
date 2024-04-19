function factorial(num) {
    let result = 1;
    for (let i = 1; i <=num; i++) {
        result*=i;
    }
    return result;
}
let n;
do {
    n = +prompt('Input number');
} while(isNaN(n));

document.write('Factorial of '+n+' = '+factorial(n));