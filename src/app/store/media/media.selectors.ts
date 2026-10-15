import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MediaState } from './media.state';

export const selectMoviesState = createFeatureSelector<MediaState>('movies');
export const selectMovies = createSelector(selectMoviesState, (state) => state.media);
export const selectLoading = createSelector(selectMoviesState, (state) => state.loading);
export const selectCurrentPage = createSelector(selectMoviesState, (state) => state.currentPage);
export const selectCategory = createSelector(selectMoviesState, (state) => state.selectedCategory);
