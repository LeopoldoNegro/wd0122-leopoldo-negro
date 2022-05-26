let lista:any[] = [1,2,3,4];

let[n1,,,n4] = lista;

console.log(n1,n4);


// destrutturazione oggetti 

let oggetto = {
    n:'Marco',
    nazione:'Italia'
}

let {n,nazione} = oggetto;

console.log(n,nazione);

