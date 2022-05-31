import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nome:string = 'Marta';
  cambiaNome(event:any){

    console.log(event.target);

    let element = <HTMLInputElement>event.target
    this.nome = element.value;
  }

  type:string = 'password';
  mostraNascondiPassword(){
    if(this.type == 'password'){
        var newType = 'text'
    }else{
        var newType = 'password'
    }
    this.type = newType;
  }


}
