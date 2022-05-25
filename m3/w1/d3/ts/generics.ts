function add<G>(a:G):G{
    return a;
}

let res = add<string>('ciao')
console.log(res)

let res2 = add<number>(544)
console.log(res2)

class CustomArray<T>{

    private arr:T[] = []

    getItems():T[]{
        return this.arr;
    }

    addItem(item:T):void{
        this.arr.push(item);
    }

    removeItem(item:T){
        let start = this.arr.indexOf(item);

        if(start != -1){
        this.arr.splice(start, 1);
        }
    }

}

let array = new CustomArray<string>();

array.addItem('ciao')
array.addItem('ciao2')
array.addItem('ciao3')
array.removeItem('ciao2')

console.log(array.getItems());


let arrayNum = new CustomArray<number>();

arrayNum.addItem(1)
arrayNum.addItem(2)
arrayNum.addItem(3)
arrayNum.removeItem(2)

console.log(arrayNum.getItems());



// generics multipli

interface KeyValue<T,U>{
    key:T;
    value:U;
}

let k:KeyValue<string,number>= {
    key : 'id',
    value : 0
}

let d:KeyValue<number,number>= {
    key : 5,
    value : 0
}


//tuple
let user:[number, string, any] = [1,'Giovanna',{}]

let[id,nome,obj] = user//non confondere con assegnamento in destrutturazione

console.log(id, nome, obj);

//matrici di tuple

let userArr:[number, string][] = [
    [1,'Mario'],
    [2,'Luisa'],
    [3,'Antonella'],
    
]



console.log(userArr);


