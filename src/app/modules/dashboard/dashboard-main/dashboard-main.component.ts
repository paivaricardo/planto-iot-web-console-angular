import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {

  constructor(
    public loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  async logout() {
    await this.loginService.logout();
  }

}
