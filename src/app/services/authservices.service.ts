import { Injectable } from '@angular/core';
import { IUsers } from '../models/users.model';
import { IuserRegister } from '../models/userRegister.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  constructor(private http: HttpClient) {}

  //userName: string = '';

  private apiUrl = 'http://localhost:3002/api/v1/register';

  postUserRegistration(registerData: IuserRegister): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.apiUrl, registerData, { headers });
  }

  private apiLoginUrl = 'http://localhost:3002/api/v1/login';
  postUserLogin(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(
      this.apiLoginUrl,
      { username, password },
      { headers }
    );
  }

  // setUserName(userName: string) {
  //   this.userName = userName;

  //   this.usersService.getUserName().subscribe((data)=>{
  //     this.userName = data[0].name;
  //     console.log('User name from service: ', this.userName);

  //   });
  //   console.log(' set user ', this.userName);
  // }

  // getUserName() {
  //   return this.userName;
  // }
}
