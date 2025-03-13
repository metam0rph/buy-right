import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login('dummy-token');
    window.location.href = "http://localhost:4200/home";
  }

}
