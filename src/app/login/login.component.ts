import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    user: SocialUser | undefined;
    loggedIn!: boolean;
    constructor(private authService: SocialAuthService) { }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    })
  }
  logOut(): void {
    this.authService.signOut();
  }
}
