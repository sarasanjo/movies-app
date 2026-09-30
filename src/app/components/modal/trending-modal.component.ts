import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Result } from '../../interfaces/trending.model';

@Component({
  selector: 'trending-modal',
  templateUrl: './trending-modal.component.html',
})
export class TrendingModalComponent {
  movieOrProgram = inject<Result>(MAT_DIALOG_DATA);

  getPosterUrl(path: string | null): string {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/no-image.jpg';
  }
}
