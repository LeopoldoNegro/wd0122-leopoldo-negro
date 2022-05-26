type Combinable = number | string 
type ConversionDescriptor = boolean | string;

function combine(input1:Combinable, input2:Combinable){

    let result;

    if(typeof input1 === 'number' && typeof input2 === 'number'){

        result = Number(input1) + Number(input2)

    }else{

        result = input1.toString() + String(input2)

    }

    return result
}

let resNum = combine(1,1)
console.log(resNum)

let resStr = combine('1',1)
console.log(resStr)


//tipi di intersezione


type Admin ={
    nome: string,
    privileges: string[]
}

type Employee = {
    names:number;
    starDate: Date;
}

type ElevatedEmployee = Admin & Employee;//in questa maniera li sto intersecando

const e1:ELevatedEmployee = {
    name: 'Max',
    names: 12,
    privilages: ['create-server'],
    startDate: new Date()
}


/*

Promemoria per l'utilizzo di interface come tipo di dato
interface ITest{
    nome:string;
    cognome: string
}

let persona:ITest = {
    nome: 'Mario',
    cognome: 'Rossi',
}
*/
