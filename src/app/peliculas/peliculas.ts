import { actorAutoComplete } from "../actores/actores";  
export interface PeliculaDTO{
  id : number;
  titulo : string;
  fechaLanzamiento : Date;
  trailer: string;
  poster?: string;
}

export interface PeliculaCreacionDTO {
  titulo: string;
  fechaLanzamiento: Date;
  trailer: string;
  poster?: File;
  generosId?: number[];
  cinesId?: number[];
  actores?: actorAutoComplete[];
}
