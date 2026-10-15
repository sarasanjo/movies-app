import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Trending } from '../interfaces/trending.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  private readonly http = inject(HttpClient);

  getTrending(timeWindow: 'day' | 'week', page: number): Observable<Trending> {
    return this.http.get<Trending>(`${environment.apiUrl}/trending/all/${timeWindow}`, {
      headers: {
        Authorization: `Bearer ${environment.apiBearerToken}`,
      },
      params: {
        page: page,
      },
    });
  }
}
