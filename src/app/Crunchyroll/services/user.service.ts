import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {basePath} from "../../../BasePath";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endpoint: string = "/user";
  apiUrl = `${basePath}${this.endpoint}` // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
    getUserById(userId: string): Observable<any> {
        return this.http.get(`${basePath}/user-profiles/${userId}`);
    }
    getNotificationsById(userId:string): Observable<any> {
        return this.http.get(`${basePath}/notifications/${userId}`);
    }
}
