import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculaComponent } from '../formulario-pelicula/formulario-pelicula.component';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculaComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {
  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log("Creando Pelicula", pelicula);

  }
}
