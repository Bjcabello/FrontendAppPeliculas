import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { ActorCreacionDTO, ActorDTO } from '../actores';
import moment from 'moment';
import { fechaNoPuedeSerFutura } from '../../compartidos/funciones/validaciones';
import { InputImgComponent } from "../../compartidos/componentes/input-img/input-img.component";

@Component({
  selector: 'app-formulario-actor',
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    InputImgComponent
],
  templateUrl: './formulario-actor.component.html',
  styleUrl: './formulario-actor.component.css',
})
export class FormularioActorComponent implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
  private formBuilder = inject(FormBuilder);
  @Input()
  modelo: ActorDTO | undefined;


  @Output()
  posteoFormulario = new EventEmitter<ActorCreacionDTO>();

  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required] }],
    fechaNacimiento: new FormControl<Date | null>(null, {
      validators: [Validators.required, fechaNoPuedeSerFutura],
    }),
  });

  obtenerErrorCampoNombre() {
    let campo = this.form.controls.nombre;
    if (campo.hasError('required')) {
      return 'El campo nombre es requerido';
    }
    return '';
  }

  ObtenerErrorCampoFechaNacimiento(){
    let campo = this.form.controls.fechaNacimiento;
    if (campo.hasError('required')) {
      return 'El campo fecha de nacimiento es requerido';
    }
    if (campo.hasError('futuro')) {
      return campo.getError('futuro').mensaje;
    }
    return "";
  }

  guardarCambios() {
    if (this.form.invalid) {
      return;
    }

    const actor = this.form.value as ActorCreacionDTO;


    if (actor.fechaNacimiento) {
      actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();
    }

    this.posteoFormulario.emit(actor);
  }
}
