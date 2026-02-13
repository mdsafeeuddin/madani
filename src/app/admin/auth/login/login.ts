import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'admin-login',
  templateUrl: 'login.html',
  styleUrl: 'login.css',
  standalone: false
})

export class Login{
  constructor(private router: Router, public auth: AuthService){}

  ngOnInit(){
    this.auth.user$.subscribe(user => {
      if(user){
        this.router.navigate(['/admin'])
      }
    });
  }

}