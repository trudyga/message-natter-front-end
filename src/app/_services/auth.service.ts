import {Inject, Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export default class AuthenticationService {
  public token : string;

  constructor(private http: Http,
              @Inject('API_URL') private endpoint: string) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token
  }

  /**
   * Get authentication token by username and password
   * @param {string} username
   * @param {string} password
   * @returns {Observable<boolean>} Observable that return true is auth was successful and false otherwise
   */
  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this.endpoint}/users/session`, {username, password})
      .map((res: Response )=> {
        let token = res.json() && res.json().token;
        if (token) {
          this.token = token;

          //store auth token in local storage
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
          // login successfull
          return true;
        } else {
          // login failed
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
