import { Component, EventEmitter, inject, Input, OnInit, Output, output } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterLink } from "@angular/router";
import { primeraLetraMayuscula } from "../../compartidos/funciones/validaciones";
import { GeneroCreacionDTO, GeneroDTO } from "../generos";


@Component({
  selector: 'app-formulario-genero',
  imports: [
    MatButtonModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css',
})
export class FormularioGeneroComponent implements OnInit{
  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  @Input()
  modelo?: GeneroDTO;
  //modelo: GeneroDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<GeneroCreacionDTO>();
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: [
      '',
      { validators: [Validators.required, primeraLetraMayuscula()] },
    ],
  });

  obtenerNombreCampo(): string {
    let nombre = this.form.controls.nombre;
    if (nombre.hasError('required')) {
      return 'El Campo nombre es requerido';
    }
    if (nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }
  guardarCambios() {
    if (!this.form.valid){
      return;
    }

    const genero = this.form.value as GeneroCreacionDTO;
    this.posteoFormulario.emit(genero);
  }
}
