import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Injectable, Input } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn: boolean = false;
  constructor(private socialAuthService: SocialAuthService) {
    socialAuthService.authState.subscribe((user) => {{
      this.isLoggedIn = (user != null);
      console.log('User is logged in ' + this.isLoggedIn);
    }});
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.isLoggedIn) {
        window.alert('User is not logged in!')
      }
    return this.isLoggedIn;
  }

}
