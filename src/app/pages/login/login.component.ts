import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]]
  });

  constructor(
    private fb: FormBuilder,
    public usersService: UsersService,
    private router: Router
    ){}



  login() {
    const user = this.loginForm.value;
    this.usersService.login(user).subscribe(data=> {this.usersService.setToken(data.token);
      this.router.navigateByUrl('/');
    });
  }

}
