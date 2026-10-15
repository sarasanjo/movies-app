import { MovieCategory } from '../../interfaces/category.type';
import { Component } from '@angular/core';
import { MediaListComponent } from '../../components/media-list/media-list/media-list';

@Component({
  standalone: true,
  selector: 'app-movies',
  imports: [MediaListComponent],
  templateUrl: './movies.page.html',
})
export class MoviesPage {
  readonly mediaType = 'movie' as const;
  categories = [
    {
      label: 'Populares',
      value: 'popular' as MovieCategory,
    },
    {
      label: 'Mejor valoradas',
      value: 'top_rated' as MovieCategory,
    },
    {
      label: 'Próximamente',
      value: 'upcoming' as MovieCategory,
    },
    {
      label: 'En cines',
      value: 'now_playing' as MovieCategory,
    },
  ];
}
