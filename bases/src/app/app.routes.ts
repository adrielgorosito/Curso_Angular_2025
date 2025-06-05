import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter-page/counter-page';
import { HeroPage } from './pages/hero-page/hero-page';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super-page/dragonball-super-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage
  },
  {
    path: 'hero',
    component: HeroPage
  },
  {
    path: 'dragonball',
    component: DragonballPage
  },
  {
    path: 'dragonballsuper',
    component: DragonballSuperPage
  },
  {
    path: '**',
    redirectTo: ''
  }
];
