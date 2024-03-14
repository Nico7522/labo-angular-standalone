import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginForm, Token } from '../models/user.model';
import { Observable, map } from 'rxjs';
import { api } from '../../../environment/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _httpClient = inject(HttpClient);
  private _tokenService = inject(TokenService);
  constructor() {}

  login(form: LoginForm): Observable<Token> {
    return this._httpClient.post<Token>(`${api.url}/auth/login`, form).pipe(
      map((res) => {
        localStorage.setItem('token', res.token);
        this._tokenService.signalTokenExist();
        return res;
      })
    );
  }
}
