import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Login } from './login.model';
import { FormLoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  customModel = new Login('', '12345678');

  constructor(private loginService: FormLoginService,
              private router: Router) {}

  loginForm(form: NgForm): void {
    console.log('>>>', form.value);
    this.loginService.postLoginUser(form.value)
      .subscribe((res) => this.loginService.getUserRole(res['token'])
          .subscribe((response) => (this.validateUser(response['role'])))
    );
  }

  validateUser(typeofuser): void {
    localStorage.setItem('ROLE_TYPE', typeofuser);
    this.router.navigate(['/profile']);
  }

}
