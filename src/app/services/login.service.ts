import { Injectable } from '@angular/core';
import { LoginCredentials } from '../interfaces/login-credentials';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn = false;
  loginCredentials?: LoginCredentials | null = null;
  private loginAuthChanges: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {}

  getLoginAuthChanges() {
    return this.loginAuthChanges.asObservable();
  }

  login(credentials: { username: string, password: string }) {
    // Perform login logic here
    // ...

    // Assuming login was successful
    this.loginCredentials = {
      username: credentials.username,
    };
    this.isLoggedIn = true;
    this.loginAuthChanges.next(true);
  }

  logout() {
    // Perform logout logic here
    // ...

    this.isLoggedIn = false;
    this.loginAuthChanges.next(false);
  }
}
