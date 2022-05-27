interface  Smartphone{
    carica:number;
    numeroChiamate:number;
    ricarica(unaricarica:number):void;
    chiamata(minutidurata:number):void;
    numero404():number;
    getnumerochiamate():number;
    azzerachiamate(azzera:number):void;
}

class FirstUser implements Smartphone{
    public carica:number;
    public numeroChiamate:number = 0
    constructor(carica:number){
        this.carica = carica;
    }
    public ricarica(unaricarica:number):void{
        this.carica = this.carica + unaricarica;
       
    }
    public chiamata(minutidurata:number):void{
        this.carica = this.carica - (0.20 * minutidurata)
        var z = 0
        z++
        this.numeroChiamate = this.numeroChiamate + z++;
    }
    public numero404():number{
        return this.carica
    }
    public getnumerochiamate():number{
        return this.numeroChiamate
    }
    public azzerachiamate(azzera:number):void{
        this.numeroChiamate = azzera
    }

    
}
class SecondUser implements Smartphone{
    public carica:number;
    public numeroChiamate:number = 0
    constructor(carica:number){
        this.carica = carica;
    }
    public ricarica(unaricarica:number):void{
        this.carica = this.carica + unaricarica;
       
    }
    public chiamata(minutidurata:number):void{
        this.carica = this.carica - (0.20 * minutidurata)
        var z = 0
        z++
        this.numeroChiamate = this.numeroChiamate + z++;
    }
    public numero404():number{
        return this.carica
    }
    public getnumerochiamate():number{
        return this.numeroChiamate
    }
    public azzerachiamate(azzera:number):void{
        this.numeroChiamate = azzera
    }

    

}
class ThirdUser implements Smartphone{
    public carica:number;
    public numeroChiamate:number = 0
    constructor(carica:number){
        this.carica = carica;
    }
    public ricarica(unaricarica:number):void{
        this.carica = this.carica + unaricarica;
       
    }
    public chiamata(minutidurata:number):void{
        this.carica = this.carica - (0.20 * minutidurata)
        var z = 0
        z++
        this.numeroChiamate = this.numeroChiamate + z++;
    }
    public numero404():number{
        return this.carica
    }
    public getnumerochiamate():number{
        return this.numeroChiamate
    }
    public azzerachiamate(azzera:number):void{
        this.numeroChiamate = azzera
    }

    
}

// primo utente ///////////////
console.log('--------------- FIRST-USER ----------------')
let firstuser = new FirstUser(0)
firstuser.ricarica(50)
firstuser.chiamata(10)
firstuser.chiamata(10)
firstuser.chiamata(10)
firstuser.chiamata(10)
console.log('saldo residuo: '+ firstuser.numero404()+'€')
console.log('numero chiamate effettuate: ' + firstuser.getnumerochiamate())
firstuser.azzerachiamate(0)
console.log('il numero delle chiamate e stato azzerato: ' + firstuser.getnumerochiamate())


// secondo utente ///////////////
console.log('--------------- SECOND-USER ----------------')
let seconduser = new SecondUser(0)
seconduser.ricarica(10)
seconduser.ricarica(100)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
seconduser.chiamata(5)
console.log('saldo residuo: '+ seconduser.numero404()+'€')
console.log('numero chiamate effettuate: ' + seconduser.getnumerochiamate())


//terzo utente////////////
console.log('--------------- THIRD-USER ----------------')
let thirduser = new ThirdUser(0)
thirduser.ricarica(10)
thirduser.ricarica(50)
thirduser.chiamata(15)
thirduser.chiamata(15)
thirduser.chiamata(15)
thirduser.chiamata(5)
thirduser.chiamata(5)
thirduser.chiamata(5)
thirduser.chiamata(5)
thirduser.chiamata(5)
console.log('saldo residuo: '+ thirduser.numero404()+'€')
console.log('numero chiamate effettuate: ' + thirduser.getnumerochiamate())