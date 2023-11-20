import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-amigo-list',
  templateUrl: './amigo-list.component.html',
  styleUrls: ['./amigo-list.component.css']
})
export class AmigoListComponent implements OnInit {
  amigos = [
    { id: 1, nombre: 'John Doe', imagen: 'assets/friend.png' },
    { id: 2, nombre: 'Jane Smith', imagen: 'assets/friend.png' },
    { id: 3, nombre: 'Bob Johnson', imagen: 'assets/friend.png' },
    { id: 4, nombre: 'Alice Williams', imagen: 'assets/friend.png' },
    { id: 5, nombre: 'Charlie Brown', imagen: 'assets/friend.png' },
    { id: 6, nombre: 'Eva Davis', imagen: 'assets/friend.png' },
    { id: 7, nombre: 'Frank Miller', imagen: 'assets/friend.png' },
    { id: 8, nombre: 'Grace Wilson', imagen: 'assets/friend.png' },
    { id: 9, nombre: 'Henry Jones', imagen: 'assets/friend.png' }

    // Agrega más amigos según sea necesario
  ];



  // Nueva propiedad para realizar un seguimiento del estado de carga de las imágenes
  imagenesCargadas: { [key: string]: boolean } = {};

  ngOnInit() {
    // Inicializar el estado de carga de las imágenes
    this.amigos.forEach(amigo => {
      this.imagenesCargadas[amigo.imagen] = false;
    });
  }

  // Método para manejar la carga exitosa de imágenes
  cargarImagen(amigo: any) {
    this.imagenesCargadas[amigo.imagen] = true;
  }
}

