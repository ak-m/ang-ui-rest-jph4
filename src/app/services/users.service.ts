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

}
