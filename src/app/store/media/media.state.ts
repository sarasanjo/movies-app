import { MovieList } from '../../interfaces/movie.model';
import { MovieCategory, TvSeriesCategory } from '../../interfaces/category.type';
import { TvSeriesList } from '../../interfaces/tv-series.model';

export interface MediaState {
  media: MovieList | TvSeriesList;
  loading: boolean;
  selectedCategory: MovieCategory | TvSeriesCategory;
  currentPage: number;
}

export const initialState: MediaState = {
  media: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  loading: false,
  selectedCategory: 'popular',
  currentPage: 1,
};
