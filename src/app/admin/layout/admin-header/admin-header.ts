import { Component } from "@angular/core";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'admin-header',
  templateUrl: 'admin-header.html',
  styleUrl: 'admin-header.css',
  standalone: false
})

export class AdminHeader{
constructor(public auth: AuthService){}
  
}