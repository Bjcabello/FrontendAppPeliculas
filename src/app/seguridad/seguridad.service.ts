import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeguridadService {

  constructor() {}

  estalogueado(): boolean {
    return false;
  }

  obtenerRol() {
    return 'admin';
  }
}
