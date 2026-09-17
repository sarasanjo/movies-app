import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () => import('./pages/home/home.page').then((m) => m.Home),
  // },
  {
    path: '',
    loadComponent: () => import('./pages/trending/trending.page').then((m) => m.Trending),
  }
];
