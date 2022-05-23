// tipi di dato

let str:string = 'Testo';//dato testuale
let num:number = 1000;//dato numerico
let bool:boolean = false;//dato booleano
let obj:object = {};//oggetto
let arr:[] = [];//array
let strArr:string[] = ['Marco','Lucia','Maria'];//array di stringa
let numArr:number[] = [0,1,2,3,4];//array di numeri
let objArr:object[] = [{},{},{},{},{},{},{},{},{}]//array di oggetti
let anyArr:any[] = ['Marco',0,{}]//array misto di stringa,numero e oggetti grazie a ANY
let any:any = 'ciao'//qualunque tipo di dato
let unk:unknown = 12;//dato sconosciuto

let union:(string|object) = 'test';
union = {};


// funzioni

function saluta(testo:string):void{
    console.log(testo);
}

function ottieniSaluto(testo:string,tag:string):HTMLElement{
    let t = document.createElement(tag)
    t.innerHTML = testo
    return t
}

console.log(ottieniSaluto('ciao', 'b'))
