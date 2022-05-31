
let bottoni = document.querySelectorAll('button')//array
let contents = document.querySelectorAll('.content')//array

for(let bottone of bottoni){

    bottone.addEventListener('click', function(){

        bottone.nextElementSibling.classList.toggle('open')


    })
}

/* si puo fare anche con il forEach
bottoni.forEach((bottone,i) =>{

    bottone.addEventListener('click', function(){

        bottone.nextElementSibling.classList.toggle('open')
        bottone.nextElementSibling.id = 'bottone-'+i


    })

})*/

