
/*/let data = new Date()
console.log(data);*/


let data = new Date();
console.log(data);
/*document.write(now)*/


let giorno = data.getDate()
let mese = data.getMonth()
let anno = data.getFullYear()

const calendaio = document.querySelector('#calendario')
function currentDate() {
    calendario.innerHTML = giorno + ' / ' + (mese+1) + ' / ' + anno
}
currentDate()
console.log(giorno, mese, anno)





setInterval(function(){
    let n = new Date();
    document.querySelector("#ora").innerHTML = n.getHours() + ' : ' + n.getMinutes() + ' : ' + n.getSeconds()
},1000)



