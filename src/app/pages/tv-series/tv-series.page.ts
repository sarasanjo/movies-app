import { Component } from '@angular/core';
import { MediaListComponent } from '../../components/media-list/media-list/media-list';
import { TvSeriesCategory } from '../../interfaces/category.type';

@Component({
  standalone: true,
  selector: 'app-movies',
  imports: [MediaListComponent],
  templateUrl: './tv-series.page.html',
})
export class TvSeriesPage {
  tvSerieCategories = [
    {
      label: 'Emitiendo hoy',
      value: 'airing_today' as TvSeriesCategory,
    },
    {
      label: 'En emisión',
      value: 'on_the_air' as TvSeriesCategory,
    },
    {
      label: 'Popular',
      value: 'popular' as TvSeriesCategory,
    },
    {
      label: 'Mejor valoradas',
      value: 'top_rated' as TvSeriesCategory,
    },
  ];
}
