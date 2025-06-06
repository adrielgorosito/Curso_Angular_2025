import { Component, computed, inject, signal } from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { GifsService } from '../../services/gifs-service';

@Component({
  selector: 'app-trending-page',
  imports: [GifsList],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css',
})
export default class TrendingPage {
  gifsService = inject(GifsService);
}
