import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-store-front-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './store-front-navbar.html',
  styleUrl: './store-front-navbar.css',
})
export class StoreFrontNavbar {
  authService = inject(AuthService);
}
