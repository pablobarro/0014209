import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataUser: any;
  constructor(public userservices: UsersService) { }

  ngOnInit() {
    this.getUserLogged();
  }

  getUserLogged() {
    this.userservices.getUser().subscribe(user=> console.log(user.data));

}
}
