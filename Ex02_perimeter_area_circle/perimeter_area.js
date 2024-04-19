function perimeter(r){
    return 2*Math.PI*r;
}

function area(r){
    return Math.PI*Math.pow(r,2);
}

let r;
do{
    r = parseFloat(prompt('Input radius'));
}while(isNaN(r));
document.write('Perimeter = '+perimeter(r)+'<br>');
document.write('Area = '+area(r));
