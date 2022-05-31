function cambiaSfondo(e){


    /* 
    *
    *il codice commentato si rifersice allo step precedente in cui E era un indice che indicava il blocco cliccato
    */
    
    //let blocchi = document.getElementsByClassName('blocco')//array di elementi con la classe blocco
    //blocchi[e].style.backgroundColor = 'red'

    let colore = e.getAttribute('data-colore')

    if(e.style.backgroundColor == ''){
        e.style.backgroundColor = colore
    }else{
        e.style.backgroundColor = ''
    }
   
    
}

