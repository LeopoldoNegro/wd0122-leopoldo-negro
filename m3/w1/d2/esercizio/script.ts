
class SonAccount{
    public saldoIniziale:number;
    constructor(saldoiniziale:number){
        this.saldoIniziale = saldoiniziale;
    }

    deposit(deposito:number){
        return this.saldoIniziale = this.saldoIniziale + deposito
    }
    oneWithdraw(prelievo:number){
        this.saldoIniziale = this.saldoIniziale - prelievo
        return prelievo
    }
    twoWithdraw(prelievo:number){
        this.saldoIniziale = this.saldoIniziale - prelievo
        return prelievo
    }
    totalBalance(){
        return this.saldoIniziale + '€'
    }
}
console.log('------------son account----------------- ' + '\n');
// set della proprietÃ  al costruttore
let son = new SonAccount(0)
console.log(son);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.oneWithdraw(500));
console.log('withdraw:-' + son.twoWithdraw(400));
console.log('totalBalance:' + son.totalBalance());

class MotherAccount {
    public saldoIniziale:number;
    constructor(saldoiniziale:number){
        this.saldoIniziale = saldoiniziale;
}
deposit(deposito:number){
    return this.saldoIniziale = this.saldoIniziale + deposito
}
oneWithdraw(prelievo:number){
    this.saldoIniziale = this.saldoIniziale - prelievo
    return prelievo
}
twoWithdraw(secondoPrelievo:number){
    this.saldoIniziale = this.saldoIniziale - secondoPrelievo
    return secondoPrelievo
}
totalBalance(){
    return this.saldoIniziale + '€'
}
}


let mother = new MotherAccount(0)
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.oneWithdraw(500));
console.log('withdraw:-' + mother.twoWithdraw(400));
console.log('totalBalance:' + mother.totalBalance());