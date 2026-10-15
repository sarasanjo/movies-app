import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MovieList } from '../interfaces/movie.model';
import { TvSeriesList } from '../interfaces/tv-series.model';


@Injectable({
  providedIn: 'root',
})
export class MediaService {
  private readonly http = inject(HttpClient);

  getMedia(mediaType: string, category: string = 'popular', page: number) {
    return this.http.get<MovieList | TvSeriesList>(`${environment.apiUrl}/${mediaType}/${category}?page=${page}`, {
      headers: {
        Authorization: `Bearer ${environment.apiBearerToken}`,
      },
    });
  }
}
