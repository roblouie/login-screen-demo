import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private _username: string;

  login(username) {
    this._username = username;
  }

  logout() {
    this._username = '';
  }

  get isLoggedIn(): boolean {
    return this._username in this;
  }

  get username(): string {
    return this._username;
  }
}