import { Injectable, runInInjectionContext, EnvironmentInjector } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<{ uid: string; displayName: string | null; photoURL: string } | null>;
  email:any;
  constructor(
    private router: Router, 
    private auth: Auth,
    private firestore: Firestore,
    private injector: EnvironmentInjector) 
    {
      this.user$ = user(this.auth).pipe(
        map(user => {
          if (!user) return null;

          return {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL || 'assets/avatar.png'
          };
        })
      );
    }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();

    const result = await runInInjectionContext(
      this.injector,
      async () =>{
        const result = await signInWithPopup(this.auth, provider);
        await result.user.getIdToken(true);
        this.email = result.user?.email;
      }
    )

    if (!this.email) {
      await signOut(this.auth);
      return;
    }

    const allowedEmails = await runInInjectionContext(
      this.injector,
      async () => {
        const allowedUserRef = doc(this.firestore, 'allowedUsers/emails');
        const snap = await getDoc(allowedUserRef);
        return snap.data()?.['email'] ?? [];
      }
    );
   
    if (!allowedEmails.includes(this.email)) {
      await signOut(this.auth);
      alert('You are not authorized to access this application.');
      this.router.navigate(['/admin/login']);
      return;
    }
    // ✅ ALLOWED
    this.router.navigate(['/admin']);
  }

  logOut(){
   return runInInjectionContext(this.injector, async () => {
    await signOut(this.auth);
    this.router.navigate(['/admin/login']);
  });
  }
}
