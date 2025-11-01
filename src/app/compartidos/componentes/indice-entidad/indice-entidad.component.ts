import { Component, inject, Input } from '@angular/core';
import { PaginacionDTO } from '../../modelos/PaginacionDTO';
import { SERVICIO_CRUD_TOKEN } from '../../proveedores/proveedores';
import { HttpResponse } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { ListadoGenericoComponent } from "../listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IServiciosCRUD } from '../../interfaces/IServiciosCRUD';

@Component({
  selector: 'app-indice-entidad',
  imports: [
    ListadoGenericoComponent,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    MatPaginatorModule,
    SweetAlert2Module,
  ],
  templateUrl: './indice-entidad.component.html',
  styleUrl: './indice-entidad.component.css',
})
export class IndiceEntidadComponent<TDTO, TCreacionDTO> {
  @Input({ required: true })
  titulo!: string;

  @Input({ required: true })
  rutaCrear!: string;

  @Input({ required: true })
  rutaEditar!: string;

  @Input()
  columnasAMostrar = ['id', 'nombre', 'acciones'];

  servicioCrud = inject(SERVICIO_CRUD_TOKEN) as IServiciosCRUD<
    TDTO,
    TCreacionDTO
  >;

  paginacion: PaginacionDTO = { pagina: 1, recordsPorPagina: 5 };
  entidades!: TDTO[];
  cantidadTotalRegistros!: number;

  constructor() {
    this.cargarRegistros();
  }

  cargarRegistros() {
    this.servicioCrud
      .obtenerPaginado(this.paginacion)
      .subscribe((respuesta: HttpResponse<TDTO[]>) => {
        this.entidades = respuesta.body as TDTO[];
        const cabecera = respuesta.headers.get(
          'cantidadTotalRegistros'
        ) as string;
        this.cantidadTotalRegistros = parseInt(cabecera, 10);
      });
  }
  actualizarPaginacion(datos: PageEvent) {
    this.paginacion = {
      pagina: datos.pageIndex + 1,
      recordsPorPagina: datos.pageSize,
    };
    this.cargarRegistros();
  }

  borrar(id: number) {

    this.servicioCrud.borrar(id).subscribe({
      next: () => {
        
        this.entidades = this.entidades.filter(
          (entidad: any) => entidad.id !== id
        );
        this.cantidadTotalRegistros--;
      },
      error: (error) => {
        console.error('Error al borrar:', error);
      },
    });
  }

  primeraLetraEnMayuscula(valor: string) {
    if (!valor) return valor;
    return valor.charAt(0).toUpperCase() + valor.slice(1);
  }
}
