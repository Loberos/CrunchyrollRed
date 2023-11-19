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
    avatar: null as File | null
  };

  onSubmit() {
    const formData = new FormData();

    Object.keys(this.formData).forEach(key => {
      // @ts-ignore
      formData.append(key, this.formData[key]);
    });

    this.signUp();

  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.formData.avatar = file;
    }
  }

  constructor(private authService: UserService, private router: Router) {}

  signUp() {
    this.authService.signUp(this.formData).subscribe(
      (response: any) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error during registration', error);
      }
    );
  }

}
