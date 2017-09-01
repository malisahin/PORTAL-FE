/**
 * Created by Mehmet Ali Sahinogullari on 1.09.2017.
 */

import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";

@Injectable()
export class LoginService {
  url = "http://localhost:8080/login";

  constructor(private http: Http) {
  }

  login(user: User): Observable<User> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.url,
      {"userCode": user.userCode, "password": user.password},
      options)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return "error.message";
  }
}
