import { Observable } from "rxjs";
import { PaginacionDTO } from "../modelos/PaginacionDTO";
import { HttpResponse } from "@angular/common/http";
import { GeneroCreacionDTO } from "../../generos/generos";

export interface IServiciosCRUD<TDTO, TCreacionDTO> {
  obtenerPaginado(paginacion: PaginacionDTO): Observable<HttpResponse<TDTO[]>>;
  obtenerPorId(id: number): Observable<TDTO>;
  actualizar(id: number, entidad: TCreacionDTO): Observable<any>;
  crear(entidad: TCreacionDTO): Observable<any>;
  borrar(id: number): Observable<any>;
}
