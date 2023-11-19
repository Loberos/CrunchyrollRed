import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-amigo-list',
  templateUrl: './amigo-list.component.html',
  styleUrls: ['./amigo-list.component.css']
})
export class AmigoListComponent implements OnInit {
  amigos = [
    { id: 1, nombre: 'Amigo 1', imagen: 'amigo1.jpg' },
    { id: 2, nombre: 'Amigo 2', imagen: 'amigo2.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    { id: 3, nombre: 'Amigo 3', imagen: 'amigo3.jpg' },
    // Agrega más amigos según sea necesario
  ];

  rutaImagenes = 'assets/amigos/';

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

