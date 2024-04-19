function swap(arr) {
    let temp;
    temp = arr[0];
    arr[0] =arr[1];
    arr[1] = temp;
}
let arr=[];
let length = arr.length;
do {
    length = +prompt('Input size of array');
} while (!Number.isInteger(length));
for (let i = 0; i < length; i++) {
    do{
        arr[i] = +prompt(i);
    }while(!Number.isInteger(arr[i]));
}
for (let i = 0; i < length; i++) {
    document.write(arr[i]+' ');
}
document.write('<br>');
let newArr=[];
for (let i = 0; i < length/2; i++) {
    newArr=[arr[i],arr[length-i-1]];
    swap(newArr);
    arr[i] = newArr[0];
    arr[length-i-1] = newArr[1];
}
for (let i = 0; i < length; i++) {
    document.write(arr[i]+' ');
}



