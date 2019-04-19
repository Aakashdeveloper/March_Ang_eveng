import { Component, OnInit } from '@angular/core';
import { Register } from './register.model';
import { FormRegisterService} from './form-register.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  userModel = new Register('', '', '');
  constructor(private formpostuser: FormRegisterService,
              private router: Router) { }

  submitForm(form: NgForm): void {
    this.formpostuser.postUser(form.value)
      .subscribe((res) => this.router.navigate(['/login']));
  }


}
