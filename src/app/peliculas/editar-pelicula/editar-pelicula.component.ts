import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculaComponent } from "../formulario-pelicula/formulario-pelicula.component";
import { SelectorMultipleModelo } from '../../compartidos/componentes/selector-multiple/selector-multiple-modelo';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculaComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css',
})
export class EditarPeliculaComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  pelicula: PeliculaDTO = {
    id: 1,
    titulo: 'Iron Man',
    trailer: 'ABC',
    fechaLanzamiento: new Date('2019-10-18'),
    poster:
      'https://www.dodmagazine.es/wp-content/uploads/2023/07/iron-man-marvel-1200x900.jpg',
  };

  generoSeleccionados: SelectorMultipleModelo[] = [
    { llave: 2, valor: 'Accion' },
  ];
  generoNoSeleccionados: SelectorMultipleModelo[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 3, valor: 'Comedia' },
  ];

  cineSeleccionados: SelectorMultipleModelo[] = [
    { llave: 3, valor: 'MultiCines' }
  ];
  cineNoSeleccionados: SelectorMultipleModelo[] = [
    { llave: 1, valor: 'CineMark' },
    { llave: 2, valor: 'SUperCines' }
  ];

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log('editando Pelicula', pelicula);
  }
}
