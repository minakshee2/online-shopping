import { Component } from '@angular/core';
import { AuthServicesService } from '../services/authservices.service';
import { IUsers } from '../models/users.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css',
})
export class LoginUserComponent {
  loginForm: FormGroup;
  returnedData: IUsers | undefined;
  userName: string;
  password: string;
  userLoginId: string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthServicesService,
    private usersService: UsersService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userLoginId: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    console.log('Form submitted:', this.loginForm.value);

    this.userLoginId = this.loginForm.value.userLoginId;
    this.password = this.loginForm.value.password;
    //console.log('Username:', this.userName);
    //console.log('Password:', this.password);

    this.authService.postUserLogin(this.userLoginId, this.password).subscribe({
      next: (response) => {
        console.log('Success:', response);
        localStorage.setItem('userLoginId', this.userLoginId);
        this.usersService
          .getUserNameByLogin(this.userLoginId)
          .subscribe((data) => {
            //this.globalVarService.userName = data.firstName;
            localStorage.setItem('userName', data.firstName);
            this.usersService.getUserName(); // Notify subscribers about the user name change
            console.log('User Name:', data.firstName);
          });

        this.router.navigate(['home']);
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  // onUserSignIn() {
  //   this.returnedData = this.usersService.getCheckedUserDetails(
  //     this.emailPhone,
  //     this.password
  //   );
  //   //console.log(' data ', this.returnedData);

  //   if (this.returnedData) {
  //     this.usersService.setUserName(this.returnedData.name);
  //     this.router.navigate(['home']);
  //   } else {
  //     console.log('login error');
  //   }
  //}
}
