// login-form.component.ts

import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  email: string="";
  password: string="";

  constructor(private authService: UserService, private router: Router) {}

  login() {
    this.authService.authenticate(this.email, this.password).subscribe(
      (response) => {
        console.log('Login exitoso', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error de inicio de sesión', error);
      }
    );
  }

}
