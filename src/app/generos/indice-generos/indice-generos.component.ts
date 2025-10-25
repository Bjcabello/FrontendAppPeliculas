import { Component, inject } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { environment } from '../../../environments/environment.development';


@Component({
  selector: 'app-indice-generos',
  imports: [MatButton, RouterLink],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {
  generosService = inject(GenerosService);
 

  constructor() {
    this.generosService.obtenerGeneros().subscribe(generos=>{
      console.log(generos);
    })
  }
}
