import SuperForms from "./Modules/Superforms.js";

let nameOptions = {
    type: 'text', name: 'nome', classes:'form-control', id: 'nome'

}

let name = SuperForms.createHTMLInputElement(nameOptions)



document.querySelector('body').append(name);