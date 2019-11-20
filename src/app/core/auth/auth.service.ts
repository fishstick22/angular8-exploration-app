import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile: any;
  authenticated: boolean;
  constructor() { this.authenticated=false }
}
