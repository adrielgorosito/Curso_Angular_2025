import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from 'src/app/gifs/services/gifs-service';
import { Gif } from '../../../interfaces/gif.interface';

interface MenuOptions {
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  styleUrl: './side-menu-options.css',
})
export class SideMenuOptions {
  gifsService = inject(GifsService);

  gifsHistory = computed(() => this.gifsService.searchHistoryKeys());

  menuOptions: MenuOptions[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
    },
  ];
}
