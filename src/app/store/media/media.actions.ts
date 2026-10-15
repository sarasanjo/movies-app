import { createAction, props } from '@ngrx/store';
import { MovieList } from '../../interfaces/movie.model';
import { TvSeriesList } from '../../interfaces/tv-series.model';

export const loadMedia = createAction(
  '[Media] Load Media',
  props<{
    mediaType: 'movie' | 'tv';
    category: string;
    page: number;
  }>(),
);

export const loadMediaSuccess = createAction(
  '[Movies or TV Series] Load Movies Success',
  props<{
    media: MovieList | TvSeriesList;
  }>(),
);

export const loadMediaFailure = createAction('[Movies] Load Movies Failure');
