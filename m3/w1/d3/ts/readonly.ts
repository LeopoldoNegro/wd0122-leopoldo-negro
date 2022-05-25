class Test{

    public readonly name:string;
    public email:string = "test@example.com";

    //public id:number; SICCOME HO USATO READONLY TRA GLI ARGOMENTI DEL COSTRUTTORE DEVO ELIMINARE QUESTA RIGA O ME LA SEGNERA' COME  DUPLICATO

    constructor(name:string, readonly id:number) {
        this.name = name;
        this.id = id;
    }

    public checkEmail(email:string):void{
        if(this.email == email){
            throw new Error('Email già esistente')
        }

        this.email = email;
    }
}

let x = new Test('Giovanna',1);
x.checkEmail("test2@example.com")

console.log(x.id, x.name, x.email)

