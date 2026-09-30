import { ChangeDetectionStrategy, Component, EventEmitter, input, output } from '@angular/core';
import { Result } from '../../interfaces/trending.model';
import { DecimalPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'movie-card',
  imports: [DecimalPipe, DatePipe],
  templateUrl: './trending-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingCardComponent {
  movieOrProgram = input.required<Result>();
  infoClick = output<Result>();

  getPosterUrl(path: string | null): string {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/no-image.jpg';
  }

  openMovieDetails() {
    this.infoClick.emit(this.movieOrProgram());
  }
}
