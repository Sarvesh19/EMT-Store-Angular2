import {Component} from "@angular/core";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import { ROUTER_DIRECTIVES, ActivatedRoute,RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {

    username: string = 'admin';
    password: string = 'admin';
    user = null;

    constructor(private userService: LoginService, private router: Router) { }

    onSubmit(data): void {
      let credentials = data.credentials;
      this.userService.login(credentials.username, credentials.password).subscribe(
        (result) => {
          this.userService.hasUserSuccessfullyLoggedIn().subscribe(
            (result) => {
              this.user = result;
              let userId = this.user.identifier;
              if(userId !== null) {
                this.userService.setIsAuthenticated(true);
                //this.router.navigate(['home']);
              } else {
                this.userService.setIsAuthenticated(false);
                //this.router.navigate(['home']);
              }
            }
          );
        });
    }

    onLogout(): void {
      this.userService.logout().subscribe(
        (result) => {
          this.user = null;
          this.userService.setIsAuthenticated(false);
          this.router.navigate(['home']);
        }
      );
    }

    isAuthenticated(): boolean {
      return this.userService.isUserAuthenticated();
    }

  onSearch(data): void {
    let queryString = data.query.queryString;
    this.router.navigate(['search/', queryString]);
  }
}
