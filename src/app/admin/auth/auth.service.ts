import { Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  user
} from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$;
  constructor(
    private router: Router, 
    private auth: Auth,
    private firestore: Firestore) 
    {
      this.user$ = user(this.auth)
    }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(this.auth, provider);
    await result.user.getIdToken(true);

    const email = result.user?.email;

    if (!email) {
      await signOut(this.auth);
      return;
    }

    const allowedUserRef = doc(this.firestore, 'allowedUsers/emails');
    const snap = await getDoc(allowedUserRef);

    const allowedEmails: string[] = snap.data()?.['email'] ?? [];
   
    if (!allowedEmails.includes(email)) {
      await signOut(this.auth);
      alert('You are not authorized to access this application.');
      this.router.navigate(['/admin/login']);
      return;
    }

    // ✅ ALLOWED
    this.router.navigate(['/admin']);
  }

  logOut(){
    return signOut(this.auth).then(()=>{
      this.router.navigate(['/admin/login'])
    })
  }
}
