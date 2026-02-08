import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  user
} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$;
  constructor(private auth: Auth) {
    this.user$ = user(this.auth)
  }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async logout() {
    return await signOut(this.auth);
  }
}
