import { Component, Input, input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCineComponent } from "../formulario-cine/formulario-cine.component";

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCineComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute})
  id!: number;

  cine: CineDTO = {
    id: 1, nombre: "En brazos de un Asesino"}

  guardarCambios(cine: CineCreacionDTO){
    console.log("Editar cine", cine);
  }


}
