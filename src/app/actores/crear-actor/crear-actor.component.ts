import { Component, inject } from '@angular/core';
import { FormularioActorComponent } from "../formulario-actor/formulario-actor.component";
import { ActorCreacionDTO } from '../actores';
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-crear-actor',
  imports: [FormularioActorComponent, MostrarErroresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {

  actoresService= inject(ActoresService);
  raouter= inject(Router);
  errores: string[]=[];


  guardarCambios(actor:ActorCreacionDTO){
    this.actoresService.crear(actor).subscribe({
      next: () => {
        this.raouter.navigate(['/actores']);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });

  }
}
