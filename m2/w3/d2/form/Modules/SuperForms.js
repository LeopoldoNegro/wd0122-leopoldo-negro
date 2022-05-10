export default class SuperForms{

    /*static setIfAttributeExists(input, obj, attr){
        
        if(obj[attr] != undefined){
            input[attr] = obj[attr];
        }
    }*/
    
    static createHTMLInputElement(obj, required = false){
        let input = document.createElement('input');
        

        //this.setIfAttributeExists(input, obj, 'type')

        if(obj.name != undefined){
            input.name = obj.name;
        }
        if(obj.placeholder != undefined){
            input.placeholder = obj.placeholder;
        }
        if(obj.id != undefined){
            input.id = obj.id;
        }
        
       
        if(obj.classes != undefined){
            input.classList.add(obj.classes)
        }

        if(required){
            input.require = true
        }
        return input;
    }

}