import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, private userservice: UsersService){}

  loginPage() {
    this.router.navigateByUrl("/login", {skipLocationChange:true});
  }

  logOut() {
    this.userservice.deleteToken();
  }

}
