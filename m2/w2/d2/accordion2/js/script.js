
let bottoni = document.querySelectorAll('button')//array
let contents = document.querySelectorAll('.content')//array

for(let bottone of bottoni){

    bottone.addEventListener('click', function(){

        let daChiudere = document.querySelector('.content.open')

        if(daChiudere != null)
        daChiudere.classList.remove('open')

        let target = bottone.getAttribute('data-target')
        let daAprire = document.querySelector(target)
        if(daChiudere != daAprire){
            document.querySelector(target).classList.toggle('open')
        }


    })
}

/* si puo fare anche con il forEach
bottoni.forEach((bottone,i) =>{

    bottone.addEventListener('click', function(){

        let target = bottone.getAttribute('data-target')
        document.querySelector(target).classList.toggle('open')

    })

})*/



