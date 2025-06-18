import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidemenu } from '../shared/sidemenu/sidemenu';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, Sidemenu],
  templateUrl: './dashboard.html',
})
export default class Dashboard {}
