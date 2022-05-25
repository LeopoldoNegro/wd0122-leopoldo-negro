var Test = /** @class */ (function () {
    //public id:number; SICCOME HO USATO READONLY TRA GLI ARGOMENTI DEL COSTRUTTORE DEVO ELIMINARE QUESTA RIGA O ME LA SEGNERA' COME  DUPLICATO
    function Test(name, id) {
        this.id = id;
        this.email = "test@example.com";
        this.name = name;
        this.id = id;
    }
    Test.prototype.checkEmail = function (email) {
        if (this.email == email) {
            throw new Error('Email già esistente');
        }
        this.email = email;
    };
    return Test;
}());
var x = new Test('Giovanna', 1);
x.checkEmail("test2@example.com");
console.log(x.id, x.name, x.email);
function add(a) {
    return a;
}
var res = add('ciao');
console.log(res);
var res2 = add(544);
console.log(res2);
var CustomArray = /** @class */ (function () {
    function CustomArray() {
        this.arr = [];
    }
    CustomArray.prototype.getItems = function () {
        return this.arr;
    };
    CustomArray.prototype.addItem = function (item) {
        this.arr.push(item);
    };
    CustomArray.prototype.removeItem = function (item) {
        var start = this.arr.indexOf(item);
        if (start != -1) {
            this.arr.splice(start, 1);
        }
    };
    return CustomArray;
}());
var array = new CustomArray();
array.addItem('ciao');
array.addItem('ciao2');
array.addItem('ciao3');
array.removeItem('ciao2');
console.log(array.getItems());
var arrayNum = new CustomArray();
arrayNum.addItem(1);
arrayNum.addItem(2);
arrayNum.addItem(3);
arrayNum.removeItem(2);
console.log(arrayNum.getItems());
var k = {
    key: 'id',
    value: 0
};
var d = {
    key: 5,
    value: 0
};
//tuple
var user = [1, 'Giovanna', {}];
var id = user[0], nome = user[1], obj = user[2]; //non confondere con assegnamento in destrutturazione
console.log(id, nome, obj);
//matrici di tuple
var userArr = [
    [1, 'Mario'],
    [2, 'Luisa'],
    [3, 'Antonella'],
];
console.log(userArr);
//# sourceMappingURL=app.js.map