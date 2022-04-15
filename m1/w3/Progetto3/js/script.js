function aggiungiNumero(bottone){

    let numero = bottone.innerHTML

    let display = document.querySelector('#display')
    display.value += numero

}

function moltiplicazione(){
    let display = document.querySelector("#display")


    display.value += "*"
}



function virgola(){
    let display = document.querySelector("#display")


    let totale = eval(display.value)

    display.value += ","
}

function risultato(){
    let display = document.querySelector("#display")


    let totale = eval(display.value)

    display.value = totale
}


function reset(){
    let display = document.querySelector("#display")


    

    display.value = ''

}

