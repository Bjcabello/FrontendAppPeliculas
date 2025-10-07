import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css',
})
export class ListadoPeliculasComponent {
  
  @Input({required:true})
  peliculas!: any[];

  agregarPelicula(){
    this,
      this.peliculas.push({
        titulo: 'Batman El Caballero de la Noche',
        fechaLanzamiento: new Date('2025-10-07'),
        precio: 15.00,
        poster:
          'https://m.media-amazon.com/images/M/MV5BN2U3NmZjMTYtY2JhOS00NzU4LWJkMDAtZjFmZjAyN2ZlMTMxXkEyXkFqcGc@._V1_.jpg',
      });
  }

}

