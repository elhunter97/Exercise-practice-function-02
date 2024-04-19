function square(number){
    return number * number;
}

let number;
do{
    number = +prompt('Input');
} while(isNaN(number));
document.write(square(number));