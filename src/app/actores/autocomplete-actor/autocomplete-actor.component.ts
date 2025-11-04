import { Component, inject, Input, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable, MatTableModule } from '@angular/material/table';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import { actorAutoCompleteDTO } from '../actores';
import { ActoresService } from '../actores.service';

@Component({
  selector: 'app-autocomplete-actor',
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    DragDropModule
  ],
  templateUrl: './autocomplete-actor.component.html',
  styleUrl: './autocomplete-actor.component.css',
})
export class AutocompleteActorComponen implements OnInit {
  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      if (typeof valor === 'string' && valor){
        this.actoresService.obtenerPorNombre(valor).subscribe(actores =>{
          this.actores = actores;
        })

      }
    });
  }
  control = new FormControl();

  actores: actorAutoCompleteDTO[] = [];

  @Input({required: true})


  actoresSelecionado: actorAutoCompleteDTO[] = [ ];

  actoresService = inject(ActoresService);

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) tabla!: MatTable<actorAutoCompleteDTO>;

  actorSeleccionado(event: MatAutocompleteSelectedEvent){
    this.actoresSelecionado.push(event.option.value);
    this.control.patchValue('');
    if(this.tabla !== undefined){
      this.tabla.renderRows();
    }
  }

  finalizarArrastre(event: CdkDragDrop<actorAutoCompleteDTO[]>){
    const indicePrevio = this.actoresSelecionado.findIndex(
      actor => actor === event.item.data);
    moveItemInArray(this.actoresSelecionado, indicePrevio, event.currentIndex);
    this.tabla.renderRows();

  }

  eliminar(actor: actorAutoCompleteDTO){
    const indice = this.actoresSelecionado.findIndex(a => a.id === actor.id);
    this.actoresSelecionado.splice(indice, 1);
    this.tabla.renderRows();
  }

}
