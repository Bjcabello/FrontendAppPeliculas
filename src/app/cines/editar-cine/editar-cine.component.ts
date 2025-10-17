import { Component, Input, input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCineComponent } from "../formulario-cine/formulario-cine.component";

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCineComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css',
})
export class EditarCineComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  cine: CineDTO = {
    id: 1,
    nombre: 'San Martin',
    latitud: -2.199649790584242,
    longitud: -79.91755930124927,
  };

  guardarCambios(cine: CineCreacionDTO) {
    console.log('Editar cine', cine);
  }
}
