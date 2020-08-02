import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../users/model/User';


@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

   baseUrl:string='https://jsonplaceholder.typicode.com/users';
   limitUrl:string='?_limit=5'

  constructor(private _httpClient:HttpClient) {
    console.log(`UsersService.constructor called`);

   }


   ngOnInit(): void {
    console.log(`UsersService.ngOnInit called`);
  }

  //
  getAllUsers(): Observable<User[]>{
    const allUsersUrl:string = this.baseUrl + this.limitUrl;
    console.log(`UsersService.getAllUsers called using ${allUsersUrl}`);
    return this._httpClient.get<User[]>(allUsersUrl);
  }

  deleteUserById(id2delete:number): Observable<any> {
    const deleteUserUrl:string = this.baseUrl + `/${id2delete}`;
    console.log(`UsersService.deleteUserById called using ${id2delete} at url ${deleteUserUrl}`);
    return this._httpClient.delete(deleteUserUrl);
  }

  updateUser(user2edit:User): Observable<any>{
    const id2edit = user2edit.id;
    const editUserUrl:string = this.baseUrl + "/" +id2edit;
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };
    console.log(`UsersService.updateUser called using for id  ${user2edit.id} at ${editUserUrl}`);
    return this._httpClient.put(editUserUrl, user2edit, httpOptions);
  }

  createUser(user2create:User): Observable<any> {
    const createUserUrl:string = this.baseUrl;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    };
    console.log(`UsersService.createUser called using ${JSON.stringify(user2create)} at url ${createUserUrl}`);
    return this._httpClient.post(createUserUrl,httpOptions);
  }
}
