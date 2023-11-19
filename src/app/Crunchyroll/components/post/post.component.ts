import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../model/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  content: string="";
  resource: string="";
  userId: string="";
  posts: Post[] = [];
  showSidebars: boolean = true;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getAndShowPosts();
  }

  createPost() {
    this.postService.createPost(this.content, this.resource, this.userId).subscribe(
      (response) => {
        console.log('Publicación creada:', response);
        this.getAndShowPosts();
      },
      (error) => {
        console.error('Error al crear la publicación', error);
        if (error.status === 401) {
          console.error('Token de acceso no válido o expirado.');
        }
      }
    );
  }

  getAndShowPosts() {
    this.postService.getPosts().subscribe(
      (posts) => {
        console.log('Publicaciones obtenidas:', posts);
        this.posts = posts;
      },
      (error) => {
        console.error('Error al obtener las publicaciones', error);
      }
    );
  }

  toggleSidebars() {
    this.showSidebars = !this.showSidebars;
  }
}

