import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isBrowser: boolean;


  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
    }
   
  isLoggedIn(): boolean {
    

    if (this.isBrowser) {
      if(localStorage.getItem('token') != null)
        return true;
      }
        return false;
     
  }

  login(token: string) {
    if (this.isBrowser) {
    localStorage.setItem('token', token);
     } 
  }

  logout() {
    localStorage.removeItem('token');
  }
}
