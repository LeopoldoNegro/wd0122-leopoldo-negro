

let richiesta = new XMLHttpRequest()//inizializzo l'oggetto che mi servirà per fare tutte le operazioni

richiesta.open('GET','https://sofin.wp-admin.it/public/api/v1/user')

richiesta.onload = function(){
    console.log(richiesta)
}

richiesta.send()//avvio la richiesta



fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(utenti => {
    
    console.log(utenti)
    for(let user of utenti){

        let div = document.createElement('div')
        div.innerHTML = user.name
        document.querySelector('#target').append(div)
    }
})



//JSON


let j = '{"name":"mario","eta":30}'

console.log(JSON.parse(j).name)

//per convertire un oggetto in stringa: JSON.stringify(oggetto)


/*fetch('prova.json')
.then(data => data.json())
.then(data => console.log(data))*/