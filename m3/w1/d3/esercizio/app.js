var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//LIBERO PROFESSIONISTA
//ARTIGIANO
//COMMERCIANTE
var Lavoratore = /** @class */ (function () {
    function Lavoratore(codredd, redditoAnnuo, tasseInps, tasseIrpef) {
        this.codredd = codredd;
        this.redditoAnnuo = redditoAnnuo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        var utileTasse = (this.redditoAnnuo * this.codredd) / 100;
        return utileTasse;
    };
    return Lavoratore;
}());
//
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
        var redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse());
        return redditoAnnuoNetto;
    };
    Artigiano.prototype.getTasseInps = function () {
        var TasseInps = (this.redditoAnnuo * this.tasseInps) / 100;
        return TasseInps;
    };
    Artigiano.prototype.getTasseIrpef = function () {
        var TasseIrpef = (this.redditoAnnuo * this.tasseIrpef) / 100;
        return TasseIrpef;
    };
    return Artigiano;
}(Lavoratore));
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LiberoProfessionista.prototype.getRedditoAnnuoNetto = function () {
        var redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse());
        return redditoAnnuoNetto;
    };
    LiberoProfessionista.prototype.getTasseInps = function () {
        var TasseInps = (this.redditoAnnuo * this.tasseInps) / 100;
        return TasseInps;
    };
    LiberoProfessionista.prototype.getTasseIrpef = function () {
        var TasseIrpef = (this.redditoAnnuo * this.tasseIrpef) / 100;
        return TasseIrpef;
    };
    return LiberoProfessionista;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Commerciante.prototype.getRedditoAnnuoNetto = function () {
        var redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef() + this.getUtileTasse());
        return redditoAnnuoNetto;
    };
    Commerciante.prototype.getTasseInps = function () {
        var TasseInps = (this.redditoAnnuo * this.tasseInps) / 100;
        return TasseInps;
    };
    Commerciante.prototype.getTasseIrpef = function () {
        var TasseIrpef = (this.redditoAnnuo * this.tasseIrpef) / 100;
        return TasseIrpef;
    };
    return Commerciante;
}(Lavoratore));
var l1 = new Artigiano(1.5, 10000, 10, 7);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
var l2 = new LiberoProfessionista(1.5, 50000, 18, 12);
console.log('utile tasse LIBERO PROFESSIONISTA:' + l2.getUtileTasse() + '€');
console.log('tasse inps LIBERO PROFESSIONISTA:' + l2.getTasseInps() + '€');
console.log('tasse irpef LIBERO PROFESSIONISTA:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto LIBERO PROFESSIONISTA:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
var l3 = new Commerciante(1.5, 25000, 16, 10.5);
console.log('utile tasse COMMERCIANTE:' + l3.getUtileTasse() + '€');
console.log('tasse inps COMMERCIANTE:' + l3.getTasseInps() + '€');
console.log('tasse irpef COMMERCIANTE:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto COMMERCIANTE:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
//# sourceMappingURL=app.js.map