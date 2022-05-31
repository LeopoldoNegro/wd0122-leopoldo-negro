/* stringhe ed escape */

var saluto = "ciao"
var domanda = "com'è oggi il tempo?"
var domanda2 = 'com\'è oggi il tempo?'
var html = '<div class="blocco"></div>'
var html2 = "<div class=\"blocco\"></div>"


var nome = 'Giovanni';//valore ipoteticamente definito dall'utente
var frase = "ciao " + nome + " come stai?";
var frase2 = `Ciao ${nome} come stai?`//backtick alt+9 

console.log(frase2)
console.log(frase2.length)
console.log( frase2[0] )
var ultimoIndice = frase2.length -1
console.log( frase2[ ultimoIndice] )

console.log( ''.length );//stringa vuota: la lunghezza è 0

console.log('%c' + frase2 , 'color:red;fon-size:30px'); //come applicare css al console log 



/*
let e const
*/

const PASSWORD = 'KHFSHKAJIF08WU48'; 
console.log(PASSWORD)
//PASSWORD = 'hbvheuvbeuubr' => ERRORE

var x = 1;
{
    console.log(x);
}

let y = 2;
{
    console.log(y);
}

{
    var x2 = 1;
    console.log(x2);
}
console.log(x2);//essendo che var ignora il block scope la variabile è raggiungibile

{
    let y2 = 1; // questa è una variabile locale che appartiene al blocco
    console.log(y2);
}
//console.log(y2); errore: y2 non è definita

function scriviSaluto(){
    var s = 'Ciao'
    document.write(s)
    return s;
}

console.log(scriviSaluto());

scriviSaluto();


/* conversione variabili */

var num = 4
var testo = '4'
var prezzo = '4€'

console.log(num + testo) //num viene trasformato in stringa
console.log(num * testo) //testo viene trasformato in numero e quindi moltiplicato
console.log(num * prezzo)

let bool = false;
let valore = '<br>il valore della variabile booleana è ' + bool + '<br>'
document.write(valore)

console.log(num * bool)//se convertito in numero un valore booleano si trasforma in 0 se è FALSE, in 1 se è TRUE

let booleano = Number(true)
let errore = Number('4a')
let stringa = String(4)
console.log(booleano, errore, stringa)

let arr = ['a', 'b', 'c', 'd', 60]
document.write(arr)//i valori vengono concatenati in una stringa e separati tra loro dalla virgola 


let anni = 10;
if(anni == 10){
    console.log('vero', anni)
}

let nomi = 'Mario, Giovanni, ';

nomi += 'Carlo'
console.log(nomi)
