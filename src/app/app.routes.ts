import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';

export const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'peliculas', component:LandingPageComponent},
  {path:'generos', component:IndiceGenerosComponent},
  {path:'generos/crear', component:CrearGenerosComponent},
];
