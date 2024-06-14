import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard {

  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    try {
      const tokenExists: boolean = this.cookieService.check('token');

      if (!tokenExists) {
        this.router.navigate(['/', 'login']);
      }

      return tokenExists;
    } catch (e) {
      console.log('Error', e);
      return true;
    }
  }
}
