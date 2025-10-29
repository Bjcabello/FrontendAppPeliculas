import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import { FormularioActorComponent } from "../formulario-actor/formulario-actor.component";
import { ActoresService } from '../actores.service';
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { CargandoComponent } from "../../compartidos/componentes/cargando/cargando.component";
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-editar-actor',
  imports: [FormularioActorComponent, CargandoComponent, MostrarErroresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css',
})
export class EditarActorComponent implements OnInit {
  ngOnInit(): void {
    this.actoresService.obtenerPorId(this.id).subscribe(actor =>{
      this.actor = actor;
    });
  }
  @Input({ transform: numberAttribute })
  id!: number;

  actor?: ActorDTO;
  actoresService = inject(ActoresService);
  router = inject(Router);
  errores: string[] = []


  guardarCambios(actor: ActorCreacionDTO) {
    this.actoresService.actualizar(this.id, actor).subscribe({
      next: () => {
        this.router.navigate(['/actores']);
      },
      error: err => {
        const errores = extraerErrores(err);
        this.errores = errores;
      }
    });
  }
}
