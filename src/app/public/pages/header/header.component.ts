import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../Crunchyroll/services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  usuario = {
    nombre: 'Tu Nombre',
    fotoPerfil: 'assets/logo.jpg'
  };
  notificationCount = 0;
  notifications: any = [];

  constructor(private userService:UserService) {

  }

  // Lógica para agregar notificaciones
  addNotification(message: string): void {
    this.notificationCount++;

    this.notifications.unshift(message);
  }

  ngOnInit(): void {
      this.userService.getUserById(localStorage.getItem('user_id') || '').subscribe((user) => {
          this.usuario.nombre = user.name;
            this.usuario.fotoPerfil = user.image;
      });
    this.userService.getNotificationsById(localStorage.getItem('user_id') || '').subscribe((notifications) => {
      this.notificationCount = notifications.length;
      this.notifications = notifications;
      this.notifications.reverse();
    });
  }
}
