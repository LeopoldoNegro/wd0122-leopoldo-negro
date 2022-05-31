/**
 * Funzione anonima
 * così è inutile e da errore perchè non ha nome
 * 
 * 
 * function(){
    alert('questo alert non si vedrà')
    }
 * 
 */


let bottone = document.getElementById('bottone') 
//bottone.onclick = miaFunzione //altra possibilità per usare onclick

function miaFunzione(){
    console.log('funzione invocata')
}

function trasformaGrassetto(s){
    return '<b>'+s+'</b>'
}


let saluto = 'Ciao'
document.write(saluto)
document.write( trasformaGrassetto('Benvenuto') )

function getSomma(){
    return 3 * 4
}

let x = getSomma()
console.log(x)

console.log( getSomma() )

/*
* funzioni parametriche
*/

function getSommapro(a,b){
    return a + b;
}

function moltiplica(a,b){
    document.write('<br>')
    document.write(a * b)
    return a * b;
}

let res1 = getSommapro(3,6)
let res2 = getSommapro(30,6983)
console.log(res1,res2)


let res3 = moltiplica(res1,res2)
let res4 = moltiplica(4,2)
console.log(res3,res4)


function moltiplica2(a,b,c = 1){//se non sarò un valore al parametro c, il suo valore di default sarà 1
    return a * b * c;
}
moltiplica2(2,3)//risultato 2 * 3 * 1
moltiplica2(2,3,8)//risultato 2 * 3 * 8

function moltiplica3(a,b,c){//se non darò un valore al parametro c, il suo valore di default sarà 1
    let terzoValore = c || 1
    return a * b * terzoValore;
}
moltiplica3(3,4)//risultato 3 * 4 * 1
moltiplica3(3,4,8)//risultato 3 * 4 * 8

function moltiplica4(a,b,c){
    if(c != undefined){
        return a * b * c;
    }else{
        return a * b
    }
}

function moltiplica5(a,b,c){
    if(c != undefined){
        var res = a * b * c;
    }else{
        var res = a * b;
    }

    return res;
}


(function(){
    alert('questo alert adesso si vedrà')
})()


function saluto2(){

    let s = 'Ciao, '
    function nome(){
        let frase = s + 'Mario'
        return frase;
    }

    return nome();
}

console.log(saluto2())

function closure(a){

    return function(b){
        return function(c){
            return a *b * c;
        }
    }

}
let risultato = closure(2)(4)(3)
console.log(risultato)


/**
 * funzioni freccia
 */


function dividi(){
    return 20 / 2
}

let divisione = () => 20 / 2//return implicito

console.log( divisione() );


let incrementa = a => a+1;//con 1 solo parametro le tonde non sono oblligaroire

console.log( incrementa(4) )


let divisionePro = (a,b) => a / b//con 2 parametri le tonde sono obbligatorie

console.log( divisionePro(4,2) )

let divisioneProLog = (a,b) => console.log(a / b)//il return implicito non mi crea problemi se non uso la funzione per restituire dati

divisioneProLog(10,2)

let divisioneProEvolution = (a,b) => {//con le graffe il return non è implicito del

    let res = a / b;
    document.write(res);
    return res

}

