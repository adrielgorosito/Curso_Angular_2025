import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  imports: [RouterModule],
  templateUrl: './sidemenu.html',
  styleUrl: './sidemenu.css',
})
export class Sidemenu {
  menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path!.includes(':'));
}
