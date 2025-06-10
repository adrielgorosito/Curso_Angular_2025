import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // LoadChildren cuando se realiza "export default routes"
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    // LoadChildren cuando no se realiza "export default routes"
    path: 'reactive',
    loadChildren: () =>
      import('./reactive/reactive.routes').then(
        (module) => module.reactiveRoutes
      ),
  },
  {
    path: 'country',
    loadChildren: () =>
      import('./country/country.routes').then((m) => m.countryRoutes),
  },
  {
    path: '**',
    redirectTo: 'reactive',
  },
];
