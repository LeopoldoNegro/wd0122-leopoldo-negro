/*
commento su pià righe 
*/


//commento su una riga


/* 

tipi di dato:

number
string
boolean (o true o fals)
object => liste di dati e funzioni separate x nome
array => lista di valori identificati x numero

*/


var numero = 5; //dato di tipo numerico
var testo = '5';//dato di tipo testuale (stringa)
var booleano = true
var oggetto = {
    nome: 'mario',
    cognome: 'rossi',
    eta: 30
}

console.log(oggetto);
var array = [ 
    1,2,3,4, 'ciao'
]





/* concatenamento e operazoni tra variabili */

var a = 2;
var b = 2;
var c = a + b; //valore

var saluto = 'ciao';
var domanda = 'come stai?'

document.write(saluto+ ' ' + domanda)


document.write('<ul>')
document.write('<li>' + oggetto.nome + '</li>');
document.write('<li>' + oggetto.cognome + '</li>');
document.write('<li>' + oggetto.eta + '</li>');
document.write('</ul>')


/* funzioni */

function somma(){
    document.write(2+6);
}

somma()

function ottienisomma(){
    return 2 + 6;
}

var risultato = ottienisomma();
console.log(risultato);

/* assegnamento valori
*/
var nome = 'mario';
console.log(nome);

nome = 'Giovanni';
console.log(nome);

/* 
lavorare con oggetti del domanda
*/

var div1 = document.getElementById('elem') // prendinl'elemento con id elem
console.log(div1);

console.log(div1.innerHTML)

div1.innerHTML = 'prova';

div1.style.backgroundColor = 'red';

