function check_char(arr,char){
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if(char === arr[i]) index++;
    }
    if(index===0) return 0;
    return index;
}

let arr=[];
let length = arr.length;
do {
    length = +prompt('Input size of array');
} while (!Number.isInteger(length));
for (let i = 0; i < length; i++) {
    arr[i] = prompt(i);
}
let char = prompt('input character');
if(check_char(arr,char)){
    document.write('found '+check_char(arr,char)+' time');
} else document.write('not found');


