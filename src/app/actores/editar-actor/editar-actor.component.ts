import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActorComponent } from "../formulario-actor/formulario-actor.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActorComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {
  @Input({transform: numberAttribute})
  id!: number;

  actor: ActorDTO = { id: 1, nombre: 'Tom Cruise', fechaNacimiento: new Date('1992-12-4') };

  guardarCambios(actor: ActorCreacionDTO) {
    console.log("Editando el actor", actor);
  }
}
