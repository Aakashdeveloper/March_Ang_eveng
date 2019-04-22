import { Component, OnInit } from '@angular/core';
import { FormLoginService } from '../login-form/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInfo;
  token: string;
  constructor(private formLoginService: FormLoginService) { }

  ngOnInit() {
    this.token = localStorage.getItem('TOKEN_NUMBER');
    this.formLoginService.getUserRole(this.token)
    .subscribe((res) => this.userInfo = res);
  }

}
