import { Component } from '@angular/core';
import { UsersServicesService } from '../services/users-services.service';
import { IUsers } from '../models/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css',
})
export class LoginUserComponent {
  constructor(
    private usersService: UsersServicesService,
    private router: Router
  ) {}

  emailPhone: string = '';
  password: string = '';
  returnedData: any;

  onUserSignIn() {
    this.returnedData = this.usersService.getCheckedUserDetails(
      this.emailPhone,
      this.password
    );
    //console.log(' data ', this.returnedData);

    if (this.returnedData) {
      this.usersService.setUserName(this.returnedData.name);
      this.router.navigate(['home']);
    } else {
      console.log('login error');
    }
  }
}
