import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  latLng,
  LeafletMouseEvent,
  tileLayer,
  Marker,
  marker,
  MarkerOptions,
  icon,
} from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { Coordenada } from './coordenada';


@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
})
export class MapaComponent implements OnInit {
  ngOnInit(): void {
    this.capas = this.coordenadaInicial.map((valor) => {
      const marcador = marker(
        [valor.latitud, valor.longitud],
        this.markerOptions
      );

      if(valor.texto){
        marcador.bindPopup(valor.texto, {autoClose: false, autoPan:false});
      }

      return marcador;
    });
  }

  @Input()
  soloLectura = false;

  @Input()
  coordenadaInicial: Coordenada[] = [];

  @Output()
  coordenadaSeleccionada = new EventEmitter<Coordenada>();

  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png',
    }),
  };

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 14,
    center: latLng(-2.1996738505222697, -79.91753232107799),
  };

  capas: Marker<any>[] = [];

  manejarClick(event: LeafletMouseEvent) {

    if(this.soloLectura){
      return;
    }

    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;

    this.capas = [];
    this.capas.push(marker([latitud, longitud], this.markerOptions));
    this.coordenadaSeleccionada.emit({ latitud, longitud });
  }
}
