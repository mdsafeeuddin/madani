import { Component } from "@angular/core";
import { AuthService } from "../auth.service";


@Component({
  selector: 'admin-login',
  templateUrl: 'login.html',
  styleUrl: 'login.css',
  standalone: false
})

export class Login{
  constructor(public auth: AuthService){}

}