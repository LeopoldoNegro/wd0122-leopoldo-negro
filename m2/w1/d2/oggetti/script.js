//usare un array  per descrivere è sbagltiato
let cellulare = [
    'samsung',
    'galaxy',
]

// descrivo in maniera precisa uno smartphone 
let smartphone = {
    marca: 'samsung',
    modello: 'galaxy',
    accendi : function(){
        //fai qualcosa
    }
}

/**
 * lettura e scrittura degli oggetti
 */

let j = {}//oggetto vuoto


let pizza = {
    gusto: 'margherita',
    tipo: 'napoletana',
    prezzo: 5,
    dettagli: function(){
        console.log('La pizza margherita costa 5 euro')
    }
}

console.log(pizza.gusto)

pizza.gusto = 'diavola'

console.log(pizza.gusto)

document.write(pizza)//questo vi darà errore perchè nopn è possibile la conversione di oggetti in stringa


pizza.dettagli()

function dettagli(){
    console.log('è una funzione differente')
}
dettagli()//è una funzione

/**
 * costruttore dell'oggetto
 */

function Pizza(g,tipo = 'napoletana',p = 5){
    this.gusto = g
    this.tipo = tipo
    this.prezzo = p
    this.sconto= 0
    this.dettagli = function(){
        console.log('La pizza' + this.gusto + ' di tipo ' + this.tipo + ' costa ' + this.prezzo + ' euro')
    }
    
}

let margherita = new Pizza('margherita')
let margherita2 = new Pizza('margherita', 'pinsa',7)
let diavola = new Pizza('divaola', 'napoletana', 1)


console.log(margherita)
//margherita2.tipo = 'romana'
console.log(margherita2)

margherita.dettagli();
margherita2.dettagli()
diavola.sconto = 5
diavola.dettagli()

Pizza.prototype.disponibilita = true

Pizza.prototype.prova = function(){
    this.dettagli()//posso lanciare un metodo all'interno dell'oggetto a cui appartiene
}

diavola.prova()