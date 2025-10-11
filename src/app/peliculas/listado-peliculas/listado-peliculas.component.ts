import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RatingComponent } from "../../compartidos/componentes/rating/rating.component";


@Component({
  selector: 'app-listado-peliculas',
  imports: [
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    ListadoGenericoComponent,
    MatButtonModule,
    MatIconModule,
    RatingComponent,
  ],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css',
})
export class ListadoPeliculasComponent {
  @Input({ required: true })
  peliculas!: any[];

  // agregarPelicula() {
  //   this.peliculas.push({
  //     titulo: 'Batman El Caballero de la Noche',
  //     fechaLanzamiento: new Date('2025-10-07'),
  //     precio: 15.0,
  //     poster:
  //       'https://m.media-amazon.com/images/M/MV5BN2U3NmZjMTYtY2JhOS00NzU4LWJkMDAtZjFmZjAyN2ZlMTMxXkEyXkFqcGc@._V1_.jpg',
  //   });
  // }
  removerPelicula(pelicula: any) {
    const indice = this.peliculas.findIndex(
      (peliculaActual: any) => peliculaActual.titulo === pelicula.titulo
    );
    this.peliculas.splice(indice, 1);
  }
  procesarVoto(voto: number) {
    alert(`Calificacion Otorgada: ${voto}`);
  }
}
