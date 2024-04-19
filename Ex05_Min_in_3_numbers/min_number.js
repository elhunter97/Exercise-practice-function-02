function minNumber(a,b,c){
    let min = (a<b)?(a<c?a:c):(b<c?b:c);
    return min;
}

let a,b,c;
do {
    a = +prompt('Enter a');
    b = +prompt('Enter b');
    c = +prompt('Enter c');
} while (isNaN(a)||isNaN(b)||isNaN(c));
document.write('Min a,b,c = '+minNumber(a,b,c));