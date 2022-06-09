import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users:User[] = [];

  isLoading:boolean = false

  constructor(private userService: UserService){

  }

  fetchUsers(){

    this.isLoading = true;
    this.userService.getUsers().subscribe(res => {
        console.log(res)

        this.users = res

    })
  }

}
