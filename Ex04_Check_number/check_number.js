function check(num){
    if(isNaN(num)){
        return 0;
    }
    return 1;
}

let n = prompt("Input");
if (check(n)) document.write(n+' is number');
else document.write(n+' is not number');