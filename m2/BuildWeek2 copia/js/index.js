
let table = document.querySelector("#users")
table.classList.add("table")
table.classList.add("table-hover")

let tHead = document.createElement("thead");
tHead.classList.add("table-dark")
let tBody = document.createElement("tbody");


const APPURL = 'https://jsonplaceholder.typicode.com/users'



fetch (APPURL)
.then(res => res.json())
.then(res => {

    let fieldDisplayed = [
        "id",
        "name",
        "username",
        "email"
    ]

    let trHead = document.createElement("tr");
    for(field of fieldDisplayed){
        let th = document.createElement("th")
        th.innerHTML = field;
        trHead.append(th)
    }
    let thBtn = document.createElement('th')
    let create = document.createElement('button')
    create.innerHTML = 'Aggiungi un nuovo utente'
    create.classList.add("btn")
    create.classList.add("btn-success")

    create.addEventListener('click', function(){

        let form = document.querySelector("#Form")
        form.innerHTML = ''

        let titolo = document.createElement('h1')
        titolo.innerHTML = 'Crea Nuovo Utent'

        titolo.style.color = "green"
        titolo.style.fontFamily = "Brush Script Std"
        titolo.style.textAlign = "left"
        


        let nome = document.createElement('h5')
        nome.innerHTML = 'Nome'

        nome.style.color = "green"
        nome.style.fontFamily = "Apple Chancery"
        
        let input1 = document.createElement('input')
        input1.setAttribute("type", "text");
        input1.setAttribute("id","nome");
        input1.setAttribute("placeholder", "inserisci nome");
        input1.style.fontFamily = "papyrus"

        let username = document.createElement('h5')
        username.innerHTML = 'Username'

        username.style.color = "green"
        username.style.fontFamily = "Apple Chancery"

        let input2 = document.createElement('input')
        input2.setAttribute("type", "text");
        input2.setAttribute("id","username");
        input2.setAttribute("placeholder", "inserisci username")
        input2.style.fontFamily = "papyrus"

        let email = document.createElement('h5')
        email.innerHTML = 'Email'

        email.style.color = "green"
        email.style.fontFamily = "Apple Chancery"

        let input3 = document.createElement('input')
        input3.setAttribute("type", "text");
        input3.setAttribute("id","email");
        input3.setAttribute("placeholder", "inserisci email")
        input3.style.fontFamily = "papyrus"

        let bottone = document.createElement('button')
       
        bottone.classList.add("btn")
        bottone.classList.add("btn-success")
        bottone.classList.add("mt-2")
        bottone.classList.add("p-1")
        bottone.innerHTML = "Aggiungi"
        
        form.append(titolo)
        titolo.append(nome, input1, username, input2, email, input3,bottone)
        
        bottone.classList.add("d-block")
    

        bottone.addEventListener('click', function(){
            
            let nome = document.querySelector('#nome')
            let username = document.querySelector('#username')
            let email = document.querySelector('#email')


            let person = {
                nome: nome.value,
                username: username.value,
                email: email.value,
                
            }


            
            fetch(APPURL, {
                method: 'POST',
                body: JSON.stringify(person),
                headers: { 'Content-type': 'Application/json'}
            })
            .then(res => res.json().then(data => ({
                body: data,
                ok: res.ok

            })))
            .then(res => {
                let dati = res.body;
                if(res.ok){

                    Swal.fire({
                        icon: 'success',
                        title: 'Utente creato',
                        html: `è stato creato il nuovo utente ${dati.nome} ${dati.username} con id ${dati.id}`
                    })
                    input1.value = ''
                    input2.value = ''
                    input3.value = ''
                }
                
            })
            
        })


    })


    thBtn.append(create)
    trHead.append(thBtn)
    tHead.append(trHead);
    table.append(tHead);


    for(let user of res){
        let tr = document.createElement('tr')
        
        for(prop in user) {
            if(fieldDisplayed.includes(prop)) {
                let key = prop;
                let value = user[prop];
                if(key === ""){
                    let td = document.createElement("td")
                    td.innerHTML = `<img class="rounded-circle" src=" ${value} ">`
                    
                    tr.append(td);
                }else {
                    let td = document.createElement("td")
                    td.innerHTML = value;
                    
                    tr.append(td);
                }
            }
        }
        let btn = document.createElement('td')
        let view = document.createElement('button')

        let img = document.createElement('img')
        img.src = 'img/usericon.png' 

        img.style.height = '100px'
        img.style.weight = '100px'

        

        view.innerHTML = 'Visualizza'
        view.classList.add("btn")
        view.classList.add("btn-info")
        view.setAttribute("type", "button");

        view.addEventListener('click', function(){
            let form = document.querySelector('#Form')
            form.innerHTML = ''
            let card = document.createElement('div')
            card.classList.add('card', 'text-dark', 'bg-light', 'mb-3')
            form.append(card)
        
            let cardHeader = document.createElement('div')
            cardHeader.classList.add('card-header')
            cardHeader.innerHTML = user.name
            
            let cardBody = document.createElement('div')
            cardBody.classList.add('card-body')
            
            let cardText = document.createElement('p')
            cardText.classList.add('card-text')
            cardText.innerHTML = 'Username: ' + user.username + '<br>' + 'Email: ' + user.email + '<br>' + 'Address: ' + user.address.street + ', '+ user.address.suite + ', ' + user.address.city 
            cardBody.append(img, cardText)
        
            
            card.append(cardHeader, cardBody)
    })

       
            

        let mod = document.createElement('button')
        mod.innerHTML = 'Modifica'
        mod.classList.add("btn")
        mod.classList.add("btn-warning")
        mod.setAttribute("type", "button");
        mod.addEventListener("click", function(){
         

            let form = document.querySelector("#Form")
            form.innerHTML = ''

            let titolo = document.createElement('h1')
            titolo.innerHTML = 'Modifica utente'
    
            let nome = document.createElement('h5')
            nome.innerHTML = 'Nome'
    
            let input1 = document.createElement('input')
            input1.setAttribute("type", "text");
            input1.setAttribute("id","nome");
    
            let username = document.createElement('h5')
            username.innerHTML = 'Username'
    
            let input2 = document.createElement('input')
            input2.setAttribute("type", "text");
            input2.setAttribute("id","username");
    
            let email = document.createElement('h5')
            email.innerHTML = 'Email'
    
            let input3 = document.createElement('input')
            input3.setAttribute("type", "text");
            input3.setAttribute("id","email");
    
            let bottone = document.createElement('button')
            bottone.classList.add("btn")
            bottone.classList.add("btn-warning")
            bottone.classList.add("ms-4")
            bottone.classList.add("p-1")
            bottone.innerHTML = "Aggiungi"
    
            form.append(titolo)
            titolo.append(nome, input1, username, input2, email, input3, bottone)


            

            fetch(APPURL)
            .then(res => res.json())
            .then(res => {

                let nome = document.querySelector('#nome')
                let username = document.querySelector('#username')
                let email = document.querySelector('#email')


                nome.value = res[user.id-1].name
                username.value = res[user.id-1].username
                email.value = res[user.id-1].email

            })

            bottone.addEventListener('click', function(){
            

                let nome = document.querySelector('#nome')
                let username = document.querySelector('#username')
                let email = document.querySelector('#email')
    
    
                let person = {
                    nome: nome.value,
                    username: username.value,
                    email: email.value,
                    
                }
    
    
                
                fetch(APPURL+"/"+ user.id, {
                    method: 'PATCH',
                    body: JSON.stringify(person),
                    headers: { 'Content-type': 'Application/json'}
                }) 
                .then(res => res.json().then(data => ({
                    body: data,
                    ok: res.ok

                })))
                .then(res => {
                    let dati = res.body;
                    if(res.ok){
                        Swal.fire({
                            icon: 'success',
                            title: 'Utente modificato',
                            html: `è stato modificato utente ${dati.nome} ${dati.username} con id ${dati.id}`,
                        })
                        input1.value = ''
                        input2.value = ''
                        input3.value = ''
                    }
                    
                })
            })


        })


        let del = document.createElement('button')
        del.innerHTML = 'Elimina'
        del.classList.add("btn")
        del.classList.add("btn-danger")
        del.setAttribute("type", "button");

        del.addEventListener('click', function(){

            Swal.fire({
                title: 'Sei sicuro?',
                text: "Non sarà possibile tornare indietro",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(APPURL +"/"+ user.id, {
                        method: 'DELETE'
                        
                    })
                  Swal.fire(
                    'Eliminato!',
                    'Il file eliminato',
                    'success'
                  )
                }
              })
            
        }) 

        btn.append(view, mod, del)
        tr.append(btn)
        tBody.append(tr)
        table.append(tBody)
    
    } 
 
})
  
    

   