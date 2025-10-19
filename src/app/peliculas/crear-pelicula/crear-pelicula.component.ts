import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculaComponent } from '../formulario-pelicula/formulario-pelicula.component';
import { SelectorMultipleModelo } from '../../compartidos/componentes/selector-multiple/selector-multiple-modelo';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculaComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {
  generoSeleccionados: SelectorMultipleModelo[] = [];
  generoNoSeleccionados: SelectorMultipleModelo[] = [
    {llave:1 , valor: 'Drama'},
    {llave:2 , valor: 'Accion'},
    {llave:3 , valor: 'Comedia'}
  ];


  guardarCambios(pelicula: PeliculaCreacionDTO){
    console.log("Creando Pelicula", pelicula);

  }
}
