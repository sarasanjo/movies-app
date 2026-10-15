import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Category } from '../../../interfaces/category.type';
import { loadMedia } from '../../../store/media/media.actions';
import { selectLoading, selectMovies } from '../../../store/media/media.selectors';
import { MovieDetail } from '../../../interfaces/movie.model';
import { TvSerieDetail } from '../../../interfaces/tv-series.model';

@Component({
  selector: 'app-media-list',
  imports: [CommonModule, MatButtonToggleModule, MatPaginatorModule],
  templateUrl: './media-list.html',
  styleUrl: 'media-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaListComponent {
  categories = input.required<Category[]>();
  mediaType = input.required<'movie' | 'tv'>();
  private store = inject(Store);
  selectedCategory = signal<string | null>(null);
  currentPage = 1;

  mediaList$ = this.store.select(selectMovies);
  loading$ = this.store.select(selectLoading);


  ngOnInit(): void {
    this.selectedCategory.set(this.categories()[0].value);
    this.store.dispatch(
      loadMedia({
        mediaType: this.mediaType(),
        category: this.selectedCategory()!,
        page: 1,
      }),
    );
  }

  changeCategory(category: string): void {
    console.log(this.mediaType());
    this.selectedCategory.set(category);

    this.store.dispatch(
      loadMedia({
        mediaType: this.mediaType(),
        category: category,
        page: 1,
      }),
    );
  }

  onPageChange(event: PageEvent): void {
    this.store.dispatch(
      loadMedia({
        mediaType: this.mediaType(),
        category: this.selectedCategory()!,
        page: event.pageIndex + 1,
      }),
    );
  }

  getTitle(media: MovieDetail | TvSerieDetail): string {
    return 'title' in media ? media.title : media.name;
  }
}
