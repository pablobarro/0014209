import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login",user);
  }

  register(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/register",user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  deleteToken() {
    this.cookies.delete("token");
  }

  getUser(): Observable<any> {
    return this.http.get("https://reqres.in/api/users/2");
  }

  getUserLogged() {
    const token = this.getToken();
  }
}
