import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { MediaService } from '../../services/media.service';
import { loadMedia, loadMediaSuccess, loadMediaFailure } from './media.actions';

@Injectable()
export class MediaEffects {
  private actions$ = inject(Actions);
  private mediaService = inject(MediaService);

  loadMedia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMedia),

      switchMap(({ mediaType, category, page }) => {
        console.log('MEDIA TYPE:', mediaType);
        console.log('CATEGORY:', category);
        console.log('PAGE:', page);
        
        return this.mediaService.getMedia(mediaType, category, page).pipe(
          map((media) =>
            loadMediaSuccess({
              media,
            }),
          ),

          catchError(() => of(loadMediaFailure())),
        );
      }),
    ),
  );
}
