import { Component, Input } from '@angular/core';
import { SelectorMultipleModelo } from './selector-multiple-modelo';
@Component({
  selector: 'app-selector-multiple',
  imports: [],
  templateUrl: './selector-multiple.component.html',
  styleUrl: './selector-multiple.component.css',
})
export class SelectorMultipleComponent {
  @Input()
  Seleccionados!: SelectorMultipleModelo[];

  @Input({ required: true })
  NoSeleccionado!: SelectorMultipleModelo[];

  seleccionar(elemento: SelectorMultipleModelo, indice: number) {
    this.Seleccionados.push(elemento);
    this.NoSeleccionado.splice(indice, 1);
  }

  deseleccionar(elemento: SelectorMultipleModelo, indice: number) {
    this.NoSeleccionado.push(elemento);
    this.Seleccionados.splice(indice,1);
  }

  seleccionaTodo(){
    this.Seleccionados.push(...this.NoSeleccionado);
    this.NoSeleccionado.length = 0;
  }

  deseleccionaTodo(){
    this.NoSeleccionado.push(...this.Seleccionados);
    this.Seleccionados.length = 0;
  }


}
