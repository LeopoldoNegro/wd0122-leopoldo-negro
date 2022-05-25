//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE

abstract class Lavoratore {
    codredd:number;
    redditoAnnuo:number;
    tasseInps:number;
    tasseIrpef:number;
    totaleIrpef:number;
    


    constructor( codredd:number, redditoAnnuo:number, tasseInps:number, tasseIrpef:number,){
        this.codredd = codredd;
        this.redditoAnnuo = redditoAnnuo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getUtileTasse():number{
        let utileTasse = (this.redditoAnnuo * this.codredd)/100
        return utileTasse
    }

    abstract getRedditoAnnuoNetto():number
}

//

class Artigiano extends Lavoratore {

    getRedditoAnnuoNetto():number {

        let redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
        return redditoAnnuoNetto
    }

    getTasseInps():number{
        let TasseInps = (this.redditoAnnuo * this.tasseInps)/100
        return TasseInps
    }

    getTasseIrpef():number{
        let TasseIrpef = (this.redditoAnnuo * this.tasseIrpef)/100
        return TasseIrpef
    }
}
class LiberoProfessionista extends Lavoratore {

    getRedditoAnnuoNetto():number {

        let redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
        return redditoAnnuoNetto
    }

    getTasseInps():number{
        let TasseInps = (this.redditoAnnuo * this.tasseInps)/100
        return TasseInps
    }

    getTasseIrpef():number{
        let TasseIrpef = (this.redditoAnnuo * this.tasseIrpef)/100
        return TasseIrpef
    }
}
class Commerciante extends Lavoratore {

    getRedditoAnnuoNetto():number {

        let redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse())
        return redditoAnnuoNetto
    }

    getTasseInps():number{
        let TasseInps = (this.redditoAnnuo * this.tasseInps)/100
        return TasseInps
    }

    getTasseIrpef():number{
        let TasseIrpef = (this.redditoAnnuo * this.tasseIrpef)/100
        return TasseIrpef
    }
}

let l1 = new Artigiano(1.5, 10000,10,7);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(1.5, 50000, 18, 12);
console.log('utile tasse LIBERO PROFESSIONISTA:' + l2.getUtileTasse() + '€');
console.log('tasse inps LIBERO PROFESSIONISTA:' + l2.getTasseInps() + '€');
console.log('tasse irpef LIBERO PROFESSIONISTA:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto LIBERO PROFESSIONISTA:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(1.5, 25000, 16, 10.5);
console.log('utile tasse COMMERCIANTE:' + l3.getUtileTasse() + '€');
console.log('tasse inps COMMERCIANTE:' + l3.getTasseInps() + '€');
console.log('tasse irpef COMMERCIANTE:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto COMMERCIANTE:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');