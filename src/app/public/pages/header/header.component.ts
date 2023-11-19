import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  usuario = {
    nombre: 'Tu Nombre',
    fotoPerfil: 'assets/logo.jpg'
  };
}
