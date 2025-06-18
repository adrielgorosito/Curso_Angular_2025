import { Component } from '@angular/core';
import { Title } from '../../../shared/title/title';
import { HeavyLoadersFast } from '../../../shared/heavy-loaders/heavy-loaders-fast';

@Component({
  selector: 'app-defer-options',
  imports: [Title, HeavyLoadersFast],
  templateUrl: './defer-options.html',
  styleUrl: './defer-options.css',
})
export default class DeferOptions {}
