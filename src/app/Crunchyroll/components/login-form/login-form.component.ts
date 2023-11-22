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
      (response:any) => {

        console.log('Login exitoso', response);
        this.router.navigate(['/home']);
        if (response.user_id) {
          localStorage.setItem('user_id', response.user_id);
        } else {
          console.error('El user_id en la respuesta es nulo o indefinido.');
        }
      },
      (error) => {
        alert('Error de inicio de sesión');
        console.error('Error de inicio de sesión', error);
      }
    );
  }

}
