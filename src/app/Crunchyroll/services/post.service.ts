import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {Post} from "../model/Post";
import {basePath} from "../../../BasePath";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  endpoint: string = "/posts";
  apiUrl = `${basePath}${this.endpoint}` // Reemplaza con la URL de tu API

  constructor(private http: HttpClient, private authService: UserService) {}

  createPost(request:any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, request);
  }

  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  LikePost(postId:string, userId:string): Observable<any> {
    console.log(`${this.apiUrl}/likes/${postId}/${userId}`)
    return this.http.get(`${this.apiUrl}/likes/${postId}/${userId}`);
  }
  DislikePost(postId:string, userId:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/dislikes/${postId}/${userId}`);
  }
  removeLikePost(postId:string, userId:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/likes/remove/${postId}/${userId}`);
  }
    removeDislikePost(postId:string, userId:string): Observable<any> {

        return this.http.get(`${this.apiUrl}/dislikes/remove/${postId}/${userId}`);
    }
    createComment(body:any): Observable<any> {
        return this.http.post(`${basePath}/comments-post`,body);
    }
    getComments(postId:string): Observable<any> {
        return this.http.get(`${basePath}/comments-post/${postId}`);
    }
}

