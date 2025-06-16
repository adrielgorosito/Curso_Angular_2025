import { Routes } from '@angular/router';
import { StoreFrontLayout } from './layouts/store-front-layout/store-front-layout';
import { HomePage } from './pages/home-page/home-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { ProductPage } from './pages/product-page/product-page';
import { GenderPage } from './pages/gender-page/gender-page';

export const storeFrontRoutes: Routes = [
  {
    path: '',
    component: StoreFrontLayout,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'product/:idSlug',
        component: ProductPage,
      },
      {
        path: 'gender/:gender',
        component: GenderPage,
      },
      {
        path: '**',
        component: NotFoundPage,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default storeFrontRoutes;
