// tipi di dato
var str = 'Testo'; //dato testuale
var num = 1000; //dato numerico
var bool = false; //dato booleano
var obj = {}; //oggetto
var arr = []; //array
var strArr = ['Marco', 'Lucia', 'Maria']; //array di stringa
var numArr = [0, 1, 2, 3, 4]; //array di numeri
var objArr = [{}, {}, {}, {}, {}, {}, {}, {}, {}]; //array di oggetti
var anyArr = ['Marco', 0, {}]; //array misto di stringa,numero e oggetti grazie a ANY
var any = 'ciao'; //qualunque tipo di dato
var unk = 12; //dato sconosciuto
var union = 'test';
union = {};
// funzioni
function saluta(testo) {
    console.log(testo);
}
function ottieniSaluto(testo, tag) {
    var t = document.createElement(tag);
    t.innerHTML = testo;
    return t;
}
console.log(ottieniSaluto('ciao', 'b'));
