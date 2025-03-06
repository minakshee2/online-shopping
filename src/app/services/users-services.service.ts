import { Injectable } from '@angular/core';
import { IUsers } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersServicesService {
  constructor() {}

  public users: IUsers[] = [
    {
      email: 'abc@gmail.com',
      password: '12345',
      name: 'Aksh',
    },
    {
      email: 'xz@gmail.com',
      password: '12345',
      name: 'Bob',
    },
  ];

  userName: string = '';

  getCheckedUserDetails(emailPhone: string, password: string) {
    let email = emailPhone.search('@');
    let data;
    if (email > 0) {
      data = this.users.find(
        (u) => u.email === emailPhone && u.password === password
      );
    } else {
      data = this.users.find(
        (u) => u.phone === emailPhone && u.password === password
      );
    }
    return data;
  }

  setUserName(userName: string) {
    this.userName = userName;
    console.log(' set user ', this.userName);
  }

  getUserName() {
    return this.userName;
  }
}
