import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  formData = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    avatar: null as File | null,
    imageSrc: null as string | null,
  };
  selectedFile: File | null = null; // Almacena la imagen seleccionada

  onSubmit() {
    const formData = new FormData();

    Object.keys(this.formData).forEach(key => {
      // @ts-ignore
      formData.append(key, this.formData[key]);
    });

    this.signUp(formData);

  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.formData.avatar = file;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.formData.imageSrc = e.target.result; // Guarda la imagen en formData o en la propiedad que prefieras
      };
      reader.readAsDataURL(file);
    }
  }

  constructor(private authService: UserService, private router: Router) {}

  signUp(request:any) {
    this.authService.registerUser(request).subscribe(
      (response: any) => {
        console.log('User registered successfully', response);
        alert('User registered successfully');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Error during registration');
        console.error('Error during registration', error);
      }
    );
  }

}
