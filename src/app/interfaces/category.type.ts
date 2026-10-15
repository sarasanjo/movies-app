export interface Category {
  label: string;
  value: string;
}

export type MovieCategory =
  | 'popular'
  | 'top_rated'
  | 'upcoming'
  | 'now_playing';

export type TvSeriesCategory =
  | 'airing_today'
  | 'on_the_air'
  | 'popular'
  | 'top_rated';
