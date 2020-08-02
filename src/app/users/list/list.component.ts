import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: User[];


  constructor() { 
    console.log(`Users.ListComponent.constructor called`);
  
  }

  ngOnInit(): void {
    console.log(`Users.ListComponent.ngOnInit called`);
    this.getMockUsers();
  }


  editUser(user2edit: User) {
    console.log(`Users.ListComponent.editUser called with ${JSON.stringify(user2edit)}`);

  }


  deleteUser(id2delete: number) {
    console.log(`Users.ListComponent.deleteUser called with ${id2delete}`);
    this.users = this.users.filter(user => user.id != id2delete);
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
