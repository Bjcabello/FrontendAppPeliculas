import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { toBase } from '../../funciones/toBase';


@Component({
  selector: 'app-input-img',
  imports: [MatButtonModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css',
})
export class InputImgComponent {
  @Input({ required: true })
  titulo!: string;
  @Output()
  archivoSeleccionado = new EventEmitter<File>();

  imagenBase?: string;

  cambio(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file: File = input.files[0];
      toBase(file)
        .then((valor: string) => {
          this.imagenBase = valor;
          console.log('imagenBase asignada:', this.imagenBase);
        })
        .catch((error) => console.error(error));
        this.archivoSeleccionado.emit(file);
    }
  }
}
