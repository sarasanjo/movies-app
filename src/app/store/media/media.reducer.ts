import { createReducer, on } from '@ngrx/store';
import { loadMedia, loadMediaSuccess, loadMediaFailure } from './media.actions';
import { initialState } from './media.state';

export const moviesReducer = createReducer(
  initialState,

  on(loadMedia, (state, { category, page }) => ({
    ...state,
    loading: true,
    category: category,
    currentPage: page,
  })),

  on(loadMediaSuccess, (state, { media }) => ({
    ...state,
    loading: false,
    media,
  })),

  on(loadMediaFailure, (state) => ({
    ...state,
    loading: false,
  })),
);
