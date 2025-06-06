import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { GifsService } from '../../services/gifs-service';
import { GifsList } from '../../components/gifs-list/gifs-list';

@Component({
  selector: 'app-gifs-history',
  imports: [GifsList],
  templateUrl: './gifs-history.html',
  styleUrl: './gifs-history.css',
})
export default class GifsHistory {
  gifsService = inject(GifsService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  );

  gifsByKey = computed(() => this.gifsService.getHistoryGifs(this.query()));
}
