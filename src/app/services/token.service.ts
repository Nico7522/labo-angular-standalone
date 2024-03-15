import { Injectable, WritableSignal, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenInfos } from '../models/user.model';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}
  get isTokenExist() {
    return localStorage.getItem('token') != undefined;
  }
  // Version signal
  tokenSignal: WritableSignal<boolean> = signal(this.isTokenExist);

  private _$token: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.isTokenExist
  );
  $token = this._$token.asObservable();

  signalTokenExist() {
    this._$token.next(this.isTokenExist);

    // Version signal
    this.tokenSignal.set(this.isTokenExist);
  }

  checkIsAdmin(): boolean | null {
    if (this.isTokenExist) {
      return this.decodeToken().role === 'Admin';
    }
    return null;
  }

  decodeToken(): TokenInfos {
    let token: string = localStorage.getItem('token') ?? '';
    let jwt: any;
    if (token !== '') {
      jwt = jwt_decode.jwtDecode(token);
    }

    return {
      id: jwt['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'],
      fullName:
        jwt['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname'],
      role: jwt['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
      tokenLimitDate:
        jwt[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/expiration'
        ],
    };
  }
}
