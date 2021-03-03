import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private service: AppServiceService,
    private router: Router,
    private auth: AuthService
  ) {}
  onRegister = false;
  ngOnInit(): void {}
  loginUser(form) {
    this.service.loginUser(form.value).subscribe(
      (user) => {
        console.log(user);
        this.auth.token = user.token;
        alert('Logged in!');
        this.service.httpOptions.headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.auth.token}`,
        });
        console.log(this.auth.token);

        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log('Error is : ', error);
        // alert(error.error.text);
      }
    );
  }
  registerNewUser(form) {
    this.service.registerUser(form.value).subscribe(
      (user) => {
        console.log(user);
        this.auth.token = user.token;
        alert('Logged in!');
        this.service.httpOptions.headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.auth.token}`,
        });
        console.log(this.auth.token);

        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.log('Error is : ', error);
        // alert(error.error.text);
      }
    );
  }
  registerUser() {
    this.onRegister = true;
  }
}
