function swap(arr) {
    let temp;
    temp = arr[0];
    arr[0] =arr[1];
    arr[1] = temp;
}

let a,b;
do {
    a = +prompt('Enter a');
    b = +prompt('Enter b');
} while (isNaN(a)||isNaN(b));
document.write('Before: a = '+a+' b = '+b+'<br>');
let arr = [a,b];
swap(arr);
document.write('After: a = '+arr[0]+' b = '+arr[1]+'<br>');

