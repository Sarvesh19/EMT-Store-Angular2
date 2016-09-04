import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";

@Injectable()
export class LoginService {

  private loginUrl = 'http://localhost:8080/j_spring_security_check';
  private logoutUrl = 'http://localhost:8080/j_spring_security_logout';

  constructor(private http: Http) { }

  login(username, password) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let body = 'j_username=' +username +'&j_password=' +password;
    return this.http.post(this.loginUrl, body, { headers: headers });
  }

  logout() {
    return this.http.post(this.logoutUrl, '', { withCredentials: true });
  }

  hasUserSuccessfullyLoggedIn() {
    // let headers = new Headers({ 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache', 'Expires': '0' });
    let headers = new Headers({});
    return this.http.get('http://localhost:8080/rest/user', { headers: headers, withCredentials: true })
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body;
  }
}
