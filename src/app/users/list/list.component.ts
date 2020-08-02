import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { JsonPipe } from '@angular/common';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _usersService:UsersService) { 
    console.log(`Users.ListComponent.constructor called`);
  
  }

  ngOnInit(): void {
    console.log(`Users.ListComponent.ngOnInit called`);
    this.getAllUsers();
  }


  editUser(user2edit: User) {
    console.log(`Users.ListComponent.editUser called with ${JSON.stringify(user2edit)}`);
    this._usersService.updateUser(user2edit)
    .subscribe((data) => {
      console.log(`Successfully edited user - Got sever response ${JSON.stringify(data)}`);

     }, (error)=> {
      console.log(`Users.ListComponent.editUser Got error while editing user : ${error.message}`);
     });;
  }


  deleteUser(id2delete: number) {
    console.log(`Users.ListComponent.deleteUser called with ${id2delete}`);
    console.log(`DELETE_UI`);
    this.users = this.users.filter(user => user.id != id2delete);
    console.log(`DELETE_SERVER`);
    this._usersService.deleteUserById(id2delete)
                      .subscribe((data) => {
                        console.log(`Successfully delete user with id ${id2delete} : ${JSON.stringify(data)}`);

                       }, (error)=> {
                        console.log(`Users.ListComponent.deleteUser Got error while deleting user : ${error.message}`);
                       });
  }

  createUser(user2create:User){
    console.log(`Users.ListComponent.createUser called with ${JSON.stringify(user2create)}`);
    this._usersService.createUser(user2create)
    .subscribe((data) => {
      console.log(`Successfully created user - Got sever response ${JSON.stringify(data)}`);

     }, (error)=> {
      console.log(`Users.ListComponent.createUser Got error while creating user : ${error.message}`);
     });
  }

  getAllUsers(){
    console.log(`Users.ListComponent.getAllUsers called`);
    this._usersService.getAllUsers()
        .subscribe(
                   (data) => {
                      console.log(`Users.ListComponent.getAllUsers Got data from backend of size ${data.length}`);
                      this.users = data;
                   }
                 , (error) => {
                    console.log(`Users.ListComponent.getAllUsers Got error while procesing : ${error.message}`);
                 }
                 );


  }


  //getMockUsers
  getMockUsers(){
    console.log(`Users.ListComponent.getMockUsers called`);
    this.users =  [
      {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
      lat: "-37.3159",
      lng: "81.1496"
      }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
      }
      },
      {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
      lat: "-43.9509",
      lng: "-34.4618"
      }
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
      }
      }];
  }
}
