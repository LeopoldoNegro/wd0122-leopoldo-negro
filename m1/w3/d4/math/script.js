let x = 1;

console.log(x)

x++ //incremento di 1 il valore della variabile numerica
x = x+1 //sovrascrivo il valore di x con il valore +1
x += 1 //aggiungo 1 al valore della variabile



x-- //decremento di 1
x = x - 1 
x -= 1

console.log(x)
/**
 * arrotondare
 */

let n1 = 5.3;
let n2 = 5.5;
let n3 = 5.8;
console.log( Math.round(n1))//arrotonda per eccesso
console.log( Math.round(n2))//arrotonda per eccesso
console.log( Math.round(n3))//arrotonda per difetto

console.log( Math.ceil(n1))//arrotonda per eccesso
console.log( Math.floor(n2))//arrotonda per difetto

let target = document.querySelector('#grazie')

let ringraziamenti = ['Grazie', 'Grazie mille', 'Tante grazie']
let punteggiatura = [' ', '!', '!!']
let smyle = [' ', ':D', ':)']


let rand = Math.floor(Math.random() * 3)


let frase = ringraziamenti [rand] + ' ' + punteggiatura[rand] + ' ' + smyle[rand]

console.log(frase)