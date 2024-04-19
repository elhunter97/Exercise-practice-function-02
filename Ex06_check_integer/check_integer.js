function check(num){
    if(num<0) return 0;
    return 1;
}

let n;
do{
    n = +prompt('Input');
} while(isNaN(n));
if(check(n)) document.write(n+' is integer');
else document.write(n+' is negative integer');