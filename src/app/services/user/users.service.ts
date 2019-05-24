
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { User } from '../../Interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users : Observable<User[]>;

  constructor(private http : HttpClient) {


   }
  readonly rootUrl = 'https://api.github.com/users'

  getUsers() :Observable<User[]>{

  return this.http.get<User[]>(this.rootUrl)
    
  }

  getUserbyId(id : number) {

    return this.http.get(this.rootUrl+'/'+id)
  }
}




