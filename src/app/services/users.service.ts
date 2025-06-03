import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3004/api/v1/username';

  getUserNameByLogin(userId: string): Observable<any> {
    const params = { userId: userId };
    return this.http.get<any>(this.apiUrl, { params });
  }

  private userName = new BehaviorSubject<boolean>(false);
  userName$ = this.userName.asObservable();

  getUserName() {
    this.userName.next(true);
  }


}
