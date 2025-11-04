import { Component, inject } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculaComponent } from '../formulario-pelicula/formulario-pelicula.component';
import { SelectorMultipleModelo } from '../../compartidos/componentes/selector-multiple/selector-multiple-modelo';
import { actorAutoCompleteDTO } from '../../actores/actores';
import { PeliculasService } from '../peliculas.service';
import { Router } from '@angular/router';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { CargandoComponent } from "../../compartidos/componentes/cargando/cargando.component";

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculaComponent, MostrarErroresComponent, CargandoComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {
  generoSeleccionados: SelectorMultipleModelo[] = [];
  generoNoSeleccionados: SelectorMultipleModelo[] = [];
  cineSeleccionados: SelectorMultipleModelo[] = [];
  cineNoSeleccionados: SelectorMultipleModelo[] = [];
  actoresSeleccionados:actorAutoCompleteDTO[] = [];
  peliculasService = inject(PeliculasService);
  private router = inject(Router);
  errores: string[] = [];

  constructor(){
     this.peliculasService.crearGet().subscribe(modelo => {
      this.generoNoSeleccionados = modelo.generos.map(genero => {
        return<SelectorMultipleModelo>{llave: genero.id, valor: genero.nombre}
      })
      this.cineNoSeleccionados = modelo.cines.map(cine=> {
        return <SelectorMultipleModelo>{llave: cine.id, valor: cine.nombre}
      })
     })
  }
  guardarCambios(pelicula: PeliculaCreacionDTO){
    this.peliculasService.crear(pelicula).subscribe({
      next: pelicula =>{
        console.log(pelicula);
        this.router.navigate(['/'])
      },
      error: err => {
        const errores = extraerErrores(err)
        this.errores = errores;
      }
    })

  }
}
