import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {Post} from "../../model/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  formData = {
    content: '',
    Resource: null as File | null,
  };
  posts: Post[] = [];

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.formData.Resource = file;
    }
  }

  constructor(private postService: PostService) {}

  onSubmit() {
    const formData = new FormData();

    Object.keys(this.formData).forEach(key => {
      // @ts-ignore
      formData.append(key, this.formData[key]);
    });

    this.createPost(formData);

  }
  ngOnInit(){

    this.getAndShowPosts();
  }


  createPost(request:any) {
    this.postService.createPost(request).subscribe(
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

}

