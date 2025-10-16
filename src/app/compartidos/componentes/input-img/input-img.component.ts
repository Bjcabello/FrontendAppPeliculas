import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { toBase } from '../../funciones/toBase';

@Component({
  selector: 'app-input-img',
  imports: [MatButtonModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {
  @Input({required: true})
   titulo!: string;

  imagenBase?: string;
  
  cambio(event: Event){
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0){
      const file: File = input.files[0];
      toBase(file).then((valor: string) => this.imagenBase = valor)
      .catch(error => console.log());
    }
  }

}
