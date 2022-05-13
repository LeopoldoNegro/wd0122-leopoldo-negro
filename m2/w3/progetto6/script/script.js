let table = document.querySelector('#utenti')


fetch("../json/users.json")
.then(res => res.json())
.then(res => {

    console.log(res)

 for(let utente of res){

    let tr = document.createElement('tr')

    tdNickname = document.createElement('td')
    tdNickname.innerHTML = utente.username

    let tdNome = document.createElement('td')
    tdNome.innerHTML = utente.firstName

    let tdCognome = document.createElement('td')
    tdCognome.innerHTML = utente.lastName

    let tdGender = document.createElement('td')
    tdGender.innerHTML = utente.gender

    let tdImg = document.createElement('td')
    tdImg.innerHTML = `<img src="${utente.profileURL}" "widht=50px height=50px">`

    let tdEmail = document.createElement('td')
    tdEmail.innerHTML = utente.email

    tr.append(tdNickname, tdNome, tdCognome, tdGender, tdImg, tdEmail)

    table.append(tr)


 }
})