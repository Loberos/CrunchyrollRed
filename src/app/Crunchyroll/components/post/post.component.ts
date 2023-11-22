import {Component, OnInit} from '@angular/core';
import {PostService} from "../../services/post.service";
import {UserService} from "../../services/user.service";
import {forkJoin} from 'rxjs';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    formData = {
        content: '',
        Resource: null as File | null,
        imageSrc: null as string | null,
        userId: ''
    };

    formCommentData = {
        content: '',
        postId: '',
        userId: '',
        resource: null as File | null,
        imageSrc: null as string | null,
    }
    posts: any = []; // No se utiliza una interfaz

    commentInput: string = '';

    profile: any;

    constructor(private postService: PostService, private userService: UserService) {
    }

    ngOnInit() {
        const storedUserId = localStorage.getItem('user_id');

        if (storedUserId !== null && storedUserId !== undefined) {

            console.log('user_id en el almacenamiento local:', storedUserId);
            this.formData.userId = storedUserId.toString();
        } else {
            console.error('El user_id en el almacenamiento local es nulo o indefinido.');
            // Podrías manejar este caso de otra manera, según tus necesidades
        }
        this.userService.getUserById(this.formData.userId).subscribe((user) => {
            this.profile = user;
        });
        this.getAndShowPosts();
    }

    onFileChange(event: any) {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            this.formData.Resource = file;

            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.formData.imageSrc = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    onFileChangeComment(event: any) {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            this.formCommentData.resource = file;

            const readerComment  = new FileReader();
            readerComment .onload = (e: any) => {
                this.formCommentData.imageSrc = e.target.result;
            };
            readerComment .readAsDataURL(file);
        }
    }

    onSubmit() {
        const formData = new FormData();


        Object.keys(this.formData).forEach(key => {
            // @ts-ignore
            formData.append(key, this.formData[key]);
        });
        console.log("userId:    ", formData.get("userId"));
        this.createPost(formData);
    }

    onComment(post: any): void { // No se utiliza una interfaz
        this.formCommentData.postId = post._id;
        this.formCommentData.userId = this.formData.userId;
        const formData = new FormData();
        Object.keys(this.formCommentData).forEach(key => {
            // @ts-ignore
            formData.append(key, this.formCommentData[key]);
        });
        this.postService.createComment(formData).subscribe(() => {
            alert('Comentario creado');
            this.getAndShowPosts();
        });

    }

    onLike(post: any): void { // No se utiliza una interfaz
        this.postService.LikePost(post._id, this.formData.userId).subscribe(() => {
            alert('Publicación actualizada');
            this.getAndShowPosts();
        });
    }

    onDislike(post: any): void { // No se utiliza una interfaz
        this.postService.DislikePost(post._id, this.formData.userId).subscribe(() => {
            alert('Publicación actualizada');
            this.getAndShowPosts();
        });
    }

    createPost(request: any) {
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

    async getAndShowPosts() {
        this.postService.getPosts().subscribe(
            (posts) => {
                console.log('Publicaciones obtenidas:');
                this.posts = posts;
                this.posts.forEach(async (post: any) => {
                    this.userService.getUserById(post.userId._id).subscribe(async (user) => {
                        post.profile = user;
                        console.log(post);
                    });
                    this.postService.getComments(post._id).subscribe(async (comments) => {
                        post.comments = comments;
                        console.log("Comentarios:", comments);

                        for (const comment of post.comments) {
                            this.userService.getUserById(comment.userId._id).subscribe(async (user) => {
                                comment.profile = user;
                            });
                        }
                    });
                });
                this.posts.reverse();
            },
            (error) => {
                console.error('Error al obtener las publicaciones', error);
            }
        );
    }
}
