let arrrr:number[] = [1,2,3]
let arrrr2:number[] = [3,4,5]

let spread:number[] = [...arrrr,...arrrr2]

console.log(spread)

function somma(...numeri:number[]){//l'operatore di spread ci permette in questo caso di inserire n argomenti nella funzione, che verranno inseriti nell'array di numeri

   return numeri.reduce((c:number, n:number) => c + n)

}


console.log(somma(2,3,6,10))