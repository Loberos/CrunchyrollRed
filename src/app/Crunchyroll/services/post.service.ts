import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {Post} from "../model/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://172.208.17.3:3000/posts'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient, private authService: UserService) {}

  createPost(content: string, resource: string, userId: string): Observable<any> {

    const body: Post = { content, resource, userId };
    return this.http.post(`${this.apiUrl}`, body);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}`);
  }
}

