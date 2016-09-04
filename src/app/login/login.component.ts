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
    isLoggedIn: boolean = false;

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
                this.isLoggedIn = true;
                console.log("YEEEES");
                //this.router.navigate(['home']);
              } else {
                this.isLoggedIn = false;
                console.log("NOOOO");
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
          this.isLoggedIn = false;
          this.router.navigate(['home']);
        }
      );
    }

    isAuthenticated(): boolean {
      return this.isLoggedIn;
    }
}
