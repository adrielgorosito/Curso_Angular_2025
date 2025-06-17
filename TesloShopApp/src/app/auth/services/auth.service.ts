import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { User } from '../../products/interfaces/interfaces/user.interface';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

const API_URL = environment.baseUrl;

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(localStorage.getItem('token'));

  checkStatusResource = rxResource({
    stream: () => this.checkStatus(),
  });

  // Getters, se usa computed para evitar que puedan ser modificados desde afuera
  authStatus = computed<AuthStatus>(() => {
    if (this._authStatus() == 'checking') return 'checking';
    if (this._user()) return 'authenticated';
    return 'not-authenticated';
  });
  user = computed(() => this._user());
  token = computed(() => this._token());

  login(email: string, password: string): Observable<boolean> {
    return this.http
      .post<AuthResponse>(`${API_URL}/auth/login`, {
        email: email,
        password: password,
      })
      .pipe(
        map((response) => {
          return this.handleAuthSuccess(response);
        }),
        catchError((error: any) => {
          return this.handleAuthError(error);
        })
      );
  }

  checkStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (!token) {
      this.logout();
      return of(false);
    }

    return this.http.get<AuthResponse>(`${API_URL}/auth/check-status`).pipe(
      map((response) => {
        return this.handleAuthSuccess(response);
      }),
      catchError((error: any) => {
        return this.handleAuthError(error);
      })
    );
  }

  private handleAuthSuccess(response: AuthResponse) {
    this._authStatus.set('authenticated');
    this._user.set(response.user);
    this._token.set(response.token);

    localStorage.setItem('token', response.token);

    return true;
  }

  private handleAuthError(error: any) {
    this.logout();
    return of(false);
  }

  logout() {
    this._authStatus.set('not-authenticated');
    this._user.set(null);
    this._token.set(null);

    localStorage.removeItem('token');
  }
}
