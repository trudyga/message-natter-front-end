import {Inject, Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import UserModel from "../../_models/user.model";

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export default class UsersService {

  private endpoint;

  constructor(private http: Http, @Inject("API_URL") endpoint: string) {
    this.endpoint = endpoint;
  }

  public getAll(): Observable<UserModel[]> {
    let url = `${this.endpoint}/users`;
    return this.http.get(url)
      .map((res: Response) => res.json())
      .map((users: UserModel[]) => users.map(
        u => new UserModel(u)));
  }

  public get(username: String): Observable<UserModel> {
    let url = `${this.endpoint}/users/${username}`;

    return this.http.get(url)
      .map((res: Response) => res.json())
      .map((user: UserModel) => new UserModel(user));
  }

  public create(user: Object): Observable<UserModel> {
    let headers = new Headers({
      'Content-Type': 'application/json;charset=utf-8'
    });
    let url = `${this.endpoint}/users`;
    return this.http.post(url, user, {headers})
      .map((res: Response) => res.json())
      .map((user:UserModel) => new UserModel(user));
  }
}
