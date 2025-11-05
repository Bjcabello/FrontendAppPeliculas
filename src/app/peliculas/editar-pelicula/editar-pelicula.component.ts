import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculaComponent } from "../formulario-pelicula/formulario-pelicula.component";
import { SelectorMultipleModelo } from '../../compartidos/componentes/selector-multiple/selector-multiple-modelo';
import { actorAutoCompleteDTO } from '../../actores/actores';
import { PeliculasService } from '../peliculas.service';
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { CargandoComponent } from "../../compartidos/componentes/cargando/cargando.component";


@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculaComponent, CargandoComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css',
})
export class EditarPeliculaComponent implements OnInit {
  ngOnInit(): void {
    this.peliculasServices.actualizarGet(this.id).subscribe((modelo) => {
      this.pelicula = modelo.pelicula;
      this.actoresSeleccionados = modelo.actores;
      this.cinesNoSeleccionados = modelo.cinesNoSeleccionados.map((cine) => {
        return <SelectorMultipleModelo>{ llave: cine.id, valor: cine.nombre };
      });

      this.cinesSeleccionados = modelo.cinesSeleccionados.map((cine) => {
        return <SelectorMultipleModelo>{ llave: cine.id, valor: cine.nombre };
      });

      this.generosNoSeleccionados = modelo.generosNoSeleccionados.map(
        (genero) => {
          return <SelectorMultipleModelo>{
            llave: genero.id,
            valor: genero.nombre,
          };
        }
      );

      this.generosSeleccionados = modelo.generosSeleccionados.map((genero) => {
        return <SelectorMultipleModelo>{
          llave: genero.id,
          valor: genero.nombre,
        };
      });
    });
  }

  @Input({ transform: numberAttribute })
  id!: number;

  pelicula!: PeliculaDTO;

  generosSeleccionados!: SelectorMultipleModelo[];
  generosNoSeleccionados!: SelectorMultipleModelo[];

  cinesSeleccionados!: SelectorMultipleModelo[];
  cinesNoSeleccionados!: SelectorMultipleModelo[];

  actoresSeleccionados!: actorAutoCompleteDTO[];

  peliculasServices = inject(PeliculasService);
  private router = inject(Router);
  errores: string[] = [];

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    this.peliculasServices.actualizar(this.id, pelicula).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        const errores = extraerErrores(err);
        this.errores = errores;
      },
    });
  }
}
