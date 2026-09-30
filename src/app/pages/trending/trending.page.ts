import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TrendingService } from '../../services/trending';
import { Result } from '../../interfaces/trending.model';
import { TrendingCardComponent } from '../../components/trending-card/trending-card.component';
import { TrendingModalComponent } from '../../components/modal/trending-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'trending-page',
  imports: [TrendingCardComponent, MatPaginator],
  templateUrl: './trending.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingPage {
  private readonly trendingService = inject(TrendingService);
  currentPage = 1;
  totalResults = 0;
  trendingMovies = signal<Result[]>([]);
  private readonly dialog = inject(MatDialog);

  constructor() {
    this.getTrending(this.currentPage);
  }

  getTrending(page: number) {
    this.trendingService.getTrending('day', page).subscribe((trending) => {
      this.trendingMovies.set(trending.results);
      this.currentPage = trending.page;
      this.totalResults = trending.total_results;
    });
  }

  onPageChange(event: PageEvent): void {
    const page = event.pageIndex + 1;

    this.getTrending(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  openMovieDetails(movie: Result) {
    this.dialog.open(TrendingModalComponent, {
      data: movie,
      width: '1000px',
      maxWidth: '90vw',
    });
  }
}
