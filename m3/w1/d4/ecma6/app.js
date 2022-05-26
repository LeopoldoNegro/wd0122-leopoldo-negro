"use strict";
let lista = [1, 2, 3, 4];
let [n1, , , n4] = lista;
console.log(n1, n4);
// destrutturazione oggetti 
let oggetto = {
    n: 'Marco',
    nazione: 'Italia'
};
let { n, nazione } = oggetto;
console.log(n, nazione);
let bottone = document.querySelector('#myform button');
bottone === null || bottone === void 0 ? void 0 : bottone.addEventListener('click', function (e) {
    e.preventDefault();
    let fields = Array.from(document.querySelectorAll('#myform input'));
    let values = fields.map((f) => f.value);
    let [name, lastname, password] = values;
    let valid = true;
    if (password.length < 8) {
        valid = false;
    }
    for (let field of fields) {
        if (!field.value) {
            valid = false;
        }
    }
    if (valid) {
        //invia dati
        console.log('valido');
    }
});
//concatenamento
let nome = 'Mario';
let saluto = 'ciao' + nome + ', come stai?';
//template litral (interpolazione di stringhe)
let saluto2 = `Ciao ${nome}, come stai?`;
let arr = [10, 20, 30];
let moltiplicazione = arr.map((n) => n * 2);
console.log(arr, moltiplicazione);
let strArr = ['ciao', 'ciao2', 'ciao3'];
let strArrBold = strArr.map((s) => `<b>${s.toUpperCase()}</b>`);
console.log(strArrBold);
let numbers = [10, 20, 30, 40];
let foundNumbers = numbers.filter((n) => n > 10);
console.log(foundNumbers);
let foundNumber = numbers.find((n) => n == 10);
console.log(foundNumber);
let arrrr = [1, 2, 3];
let arrrr2 = [3, 4, 5];
let spread = [...arrrr, ...arrrr2];
console.log(spread);
function somma(...numeri) {
    return numeri.reduce((c, n) => c + n);
}
console.log(somma(2, 3, 6, 10));
//# sourceMappingURL=app.js.map