import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router} from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { GeneroCreacionDTO } from '../generos';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";

@Component({
  selector: 'app-crear-generos',
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormularioGeneroComponent
],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css',
})
export class CrearGenerosComponent {
  private router = inject(Router);

  guardarCambios(genero: GeneroCreacionDTO) {
    //this.router.navigate(['/generos']);
    console.log("Creando el genero",genero);


  }
}
