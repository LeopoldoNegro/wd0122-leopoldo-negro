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
//enumeratori
var Months;
(function (Months) {
    Months[Months["Gennaio"] = 1] = "Gennaio";
    Months[Months["Febbraio"] = 2] = "Febbraio";
    Months[Months["Marzo"] = 3] = "Marzo";
    Months[Months["Aprile"] = 4] = "Aprile";
})(Months || (Months = {}));
console.log(Months.Gennaio, Months[1]);
console.log(Months);
var Color;
(function (Color) {
    Color["Bianco"] = "#fff";
    Color["Nero"] = "#000";
})(Color || (Color = {}));
console.log(Color);
var colore = Color.Bianco;
//funzioni e oggetti
var states = {
    italy: 'Rome',
    england: 'London',
    id: function () {
        return this.italy + ' ' + this.england;
    }
};
console.log(states.italy, states.england, states.id());
function somma(a, b, c) {
    if (!c) {
        return a + b;
    }
    else {
        return a + b + c;
    }
}
var Veicoli = /** @class */ (function () {
    function Veicoli(ruote, marca, modello, prezzo, tipo) {
        this.ruote = 4;
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }
    Veicoli.prototype.dettagliVeicolo = function () {
        return "Modello: ".concat(this.modello, ", Marca ").concat(this.marca, ", Ruote: ").concat(this.ruote);
    };
    return Veicoli;
}());
var apecar = new Veicoli(3, 'Piaggio', '', 1500, 'apecar');
var Bici = /** @class */ (function (_super) {
    __extends(Bici, _super);
    function Bici(marca, modello, prezzo) {
        return _super.call(this, 2, marca, modello, prezzo, 'Bicicletta') || this;
    }
    return Bici;
}(Veicoli));
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(marca, modello, prezzo) {
        var _this = _super.call(this, 4, marca, modello, prezzo, 'Automobile') || this;
        _this.autoradio = true;
        _this.costoPieno = 75;
        return _this;
    }
    return Cars;
}(Veicoli));
var auto = new Cars('Piaggio', '', 1500);
console.log(auto);
var ElecticCars = /** @class */ (function (_super) {
    __extends(ElecticCars, _super);
    function ElecticCars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElecticCars.prototype.cambiaCostoPieno = function () {
        this.costoPieno = 30; // la proprietà costo Pieno non è accesibile dalla sottoclasse perchè è private
    };
    return ElecticCars;
}(Cars));
var autoElettrica = new ElecticCars('Fiat', '500 elettrica', 1500);
//# sourceMappingURL=app.js.map