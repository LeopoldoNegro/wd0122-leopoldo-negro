class persone{
    constuctor(nome, eta){
        this.name = nome;
        this.age = eta;
    }


calcolone(obj2){
    if (this.age > obj2.age){
        console.log(this.name + 'è più piccolo di ' + obj2.name)
    }
    else if (this.age < obj2.age){
        console.log(this.name + 'è più giovane di ' + obj2.name)
    }
    else if (this.age == obj2.age){
        console.log(this.name + ' e ' + obj2.name + 'hanno la stessa età')
    }
    }
}

 
let p1 = new persone('Mario', 18)
let p2 = new persone('Marco', 21)
let p3 = new persone('Matteo', 18)


p2.calcolone(p1)