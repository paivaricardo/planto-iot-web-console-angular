import { Injectable } from '@angular/core';
import { LoginCredentials } from '../interfaces/login-credentials';
import { BehaviorSubject } from 'rxjs';
import {environment} from "../../environments/environment";

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

  async login(credentials: { email: string, password: string }) {
    // Perform login logic here
    // ...
    if (credentials.email == environment.adminUsername && credentials.password == environment.adminPassword) {

      // Assuming login was successful
      this.loginCredentials = {
        username: credentials.email,
        email: credentials.email,
      };
      this.isLoggedIn = true;
      this.loginAuthChanges.next(true);
      return true;
    } else {
      this.isLoggedIn = false;
      this.loginAuthChanges.next(false);
      return false;
    }
  }

  async logout() {
    // Perform logout logic here
    // ...

    this.isLoggedIn = false;
    this.loginAuthChanges.next(false);
    return true;
  }
}
