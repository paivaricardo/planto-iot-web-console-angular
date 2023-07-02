import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'planto-iot-web-console-angular';
  isLoggedIn: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.loginService.getLoginAuthChanges().subscribe({
      next: (isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      },
    });
  }
}
