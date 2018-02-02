import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../services/media.service';
import { User } from '../../models/User';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    username: '',
    password: '',
    email: ''
  };

  constructor(public mediaService: MediaService) { }

  ngOnInit() {
  }

  register() {
    console.log(this.user);
    this.mediaService.register(this.user).subscribe(response => {
      console.log(response);
      this.mediaService.username = this.user.username;
      this.mediaService.password = this.user.password;
      this.mediaService.login();
    }, (error: HttpErrorResponse) => {
      console.log(error.error.message);
    });
  }

}
