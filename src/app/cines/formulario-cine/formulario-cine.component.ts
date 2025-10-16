import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CineCreacionDTO } from '../cines';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-formulario-cine',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule,MatButtonModule, RouterLink],
  templateUrl: './formulario-cine.component.html',
  styleUrl: './formulario-cine.component.css'
})
export class FormularioCineComponent implements OnInit{
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
 @Input()
 modelo?: CineCreacionDTO;

  @Output()
  posteoFormulario = new EventEmitter<CineCreacionDTO>();

  private formBuilder =  inject(FormBuilder);

  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required]}]
  })

  obtenerErrorCampoNombre() {
    let nombre = this.form.controls.nombre;
    if (nombre.hasError('required')) {
      return 'El campo nombre es requerido';
    }
    return '';
  }

  guaradarCambios() {
    if (!this.form.valid) {
      return;
    }
    const cine = this.form.value as CineCreacionDTO;
    this.posteoFormulario.emit(cine);
  }



}
