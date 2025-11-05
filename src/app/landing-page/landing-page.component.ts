import { Component, inject, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from '../peliculas/listado-peliculas/listado-peliculas.component';
import { MenuComponent } from '../compartidos/componentes/menu/menu.component';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent{

  peliculasService = inject(PeliculasService);

  constructor(){
    this.cargarPeliculas();
  }
  
  peliculaBorrada(){
    this.cargarPeliculas();
  }

  cargarPeliculas(){
    this.peliculasService.obtenerLandinPage().subscribe((modelo) => {
      this.peliculaEnCine = modelo.enCines;
      this.peliculaProximoEstrenos = modelo.proximosEstrenos;
    });
  }
    
  

  peliculaEnCine!: any[];
  peliculaProximoEstrenos!: any[];
}
