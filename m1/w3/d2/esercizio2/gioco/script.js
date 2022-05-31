/*let nome = 'Leopoldo'
let cognome = 'Negro'
let eta = 28
let annodinascita = 1993
let compleanno = '22 ottobre'

console.log(nome)

document.write(nome + ' ' + cognome + ' ' + compleanno + ' ' + annodinascita + ' ' + eta) 

const codicefiscale = 'NGRLLD93R22D969M'
console.log(codicefiscale)

function scriviCiao (){
    let c = 'Ciao'
    document.write(c)

}
console.log(scriviCiao())

scriviCiao()
*/


let persona = prompt('Sei Genuano?')

if (persona = 'no'){
   
}



function cambiaSfondo(e){
    let colore = e.getAttribute('data-colore')
    if(e.style.backgroundColor == ''){
        e.style.backgroundColor = colore
    }else{
        e.style.backgroundColor = ''
    }
}

