import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [

{
  path: '',
  component: CounterPageComponent,
},


{
    path: 'hero', // <-- Sin la barra '/'
    component: HeroPageComponent
  },

// NUEVA RUTA:
  {
    path: 'dragonball',
    component: DragonballPageComponent
  },

 {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  },

{
  path: '**',
  redirectTo: '',
},

];
