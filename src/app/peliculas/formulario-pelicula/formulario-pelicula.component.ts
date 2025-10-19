import { Component, EventEmitter, inject, Input, OnInit, output, Output } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerIntl } from '@angular/material/datepicker'; // Opcional: para i18n si necesitas español
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import moment from 'moment';
import { SelectorMultipleModelo } from '../../compartidos/componentes/selector-multiple/selector-multiple-modelo';
import { SelectorMultipleComponent } from "../../compartidos/componentes/selector-multiple/selector-multiple.component";


@Component({
  selector: 'app-formulario-pelicula',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, RouterLink, MatDatepickerModule, InputImgComponent, SelectorMultipleComponent],
  templateUrl: './formulario-pelicula.component.html',
  styleUrl: './formulario-pelicula.component.css'
})
export class FormularioPeliculaComponent implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  @Input({required: true})
  generoNoSeleccionado!: SelectorMultipleModelo[];

  @Input({required: true})
  generoSeleccionado!: SelectorMultipleModelo[];

  @Input()
  modelo?: PeliculaDTO;

  @Output()
  posteoFormulario = new EventEmitter<PeliculaCreacionDTO>();

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    titulo: ['', { validators: [Validators.required] }],
    fechaLanzamiento: new FormControl<Date | null>(null, { validators: [Validators.required] }),
    trailer: '',
    poster: new FormControl<File | string | null>(null),
  });

  archivoSeleccionado(file: File) {
    this.form.controls.poster.setValue(file);
  }

  guardaCambios() {
    if (!this.form.valid) {
      return;
    }

    const pelicula = this.form.value as PeliculaCreacionDTO;
    pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();

    const generosId = this.generoSeleccionado.map(val => val.llave);
    pelicula.generosId = generosId;
    this.posteoFormulario.emit(pelicula);
  }

  obtenerErrorCampoTitulo() {
    let campo = this.form.controls.titulo;

    if (campo.hasError("required")) {
      return "El campo título es requerido";
    }
    return "";
  }

  obtenerErrorCampoFecha() {
    let campo = this.form.controls.fechaLanzamiento;

    if (campo.hasError("required")) {
      return "El campo Fecha Lanzamiento es requerido";
    }
    return "";
  }
}
