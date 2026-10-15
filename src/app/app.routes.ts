import { Routes } from '@angular/router';
import { TvSeriesPage } from './pages/tv-series/tv-series.page';

export const routes: Routes = [

  // {
  //   path: '',
  //   loadComponent: () => import('./pages/home/home.page').then((m) => m.Home),
  // },
  {
    path: 'trending',
    loadComponent: () => import('./pages/trending/trending.page').then((m) => m.TrendingPage),
  },
  {
    path: 'movies',
    loadComponent: () => import('./pages/movies/movies.page').then((m) => m.MoviesPage),
  },
  {
    path: 'tv-series',
    loadComponent: () => import('./pages/tv-series/tv-series.page').then((m) => m.TvSeriesPage),
  },
  // { path: '', redirectTo: 'trending', pathMatch: 'full' }

];
