import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://172.208.17.3:3000/user';

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }
  signUp(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

}
