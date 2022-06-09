import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<{data:User[]}>('https://reqres.in/api/users?page=2')
    .pipe(
      map(res => res.data)
    )

  }

}
