let num = 5;
let str = 'test';
let bool = true;
let arr = [];
let obj = {};


console.log(
    typeof num,
    typeof str,
    typeof bool,
    typeof arr,
    typeof obj
);




let num1 = 1
let num2 = '1'

console.log(num1 == num2)//vero anche se i tipi di dato sono diversi ma i valori sono uguali
console.log(num1 === num2)//falso perche devono essere identici anche i tipi di dato
console.log(num1 != num2)//false perchè il valore è diverso
console.log(num1 !== num2)//falso perchè devono essere diversi anche i tipi di dato




/*let conferma = prompt("scrivi la tua età'") >= 18 ? 'sei maggiorenne' : 'sei minorenne'
document.write(conferma)*/

let eta = prompt("Scrivi la tua età") || 0;

let conferma = eta >= 18 ? 'sei maggiorenne' : 'sei minorenne'
document.write(conferma)


