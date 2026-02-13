import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  user
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$;
  constructor(private router: Router, private auth: Auth) {
    this.user$ = user(this.auth)
  }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

    logout(){
    return signOut(this.auth).then(()=>{
      this.router.navigate(['/admin/login'])
    })
  }
}
