let boolean:boolean = true;
if(boolean){
    console.log('ok')
}

let eta:number = 30;

if(eta <18){
    console.log('Sei minorenne')
}else if(eta >= 18 && eta <=120){
    console.log('Sei maggiorenne')
}else{
    console.log('Sei antico')
}

//un confronto genera sempre un dato booleano
console.log(eta >= 18 && eta <=120)//da true perchè entrambe vere
console.log(eta >= 18 && eta <=20)// da FALSE perche una falsa
console.log(eta >= 18 || eta <=20)// da true perche una vera

let b:boolean = !true;

console.log(!b);//l'operatore ! serve ad invertire il risultato

console.log(!(eta >= 18 || eta <=20))//l'operatore not ribalta il riusultato grazie alle parentesi ()