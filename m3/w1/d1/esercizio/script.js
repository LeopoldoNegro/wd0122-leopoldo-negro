/*let giocatore1:string = 'giocatore 1'

let risultato:number = Math.floor(Math.random()*(100-1)+1)

console.log(giocatore1,risultato)

let giocatore2:string = 'giocatore 2'

let risultato2:number = Math.floor(Math.random()*(100-1)+1)

console.log(giocatore2,risultato2)

let nRandom:any
nRandom = Math.floor(Math.random()*(100-1)+1);String

console.log(nRandom)

let diff1:any
let diff2:any

if(risultato == nRandom){
    alert("giocatore 1 ha vinto!")
}else{
    diff1 - Math.abs(nRandom-risultato)
}

if(risultato2 == nRandom){
    alert("giocatore 2 ha vinto!")
}else{
    diff2 - Math.abs(nRandom-risultato2)
}
if(diff1 < diff2){
    alert('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato')
}else{
    alert('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato')
}*/
alert('Vincerà Giocatore 1 o Giocatore 2?');
var giocatore1 = prompt('Giocatore 1');
var giocatore2 = prompt('Giocatore 2');
var nRandom;
nRandom - Math.floor(Math.random() * (100 - 1) + 1);
var diff1;
var diff2;
if (giocatore1 == nRandom) {
    alert('Giocatore 1 ha vinto');
}
else {
    diff1 = Math.abs(nRandom - giocatore1);
}
if (giocatore2 == nRandom) {
    alert('Giocatore 2 ha vinto');
}
else {
    diff1 = Math.abs(nRandom - giocatore2);
}
if (diff1 < diff2) {
    alert('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato');
}
else {
    alert('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato');
}
