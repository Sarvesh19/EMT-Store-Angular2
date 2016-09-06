import {Component, OnInit} from "@angular/core";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import { ROUTER_DIRECTIVES, ActivatedRoute,RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: 'app/login/user-details.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class UserDetailsComponent implements OnInit {

    user = null;
    isLoggedIn: boolean = false;

    constructor(private userService: LoginService, private router: Router) { }

    ngOnInit(): void {
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
    }

    isAuthenticated(): boolean {
      return this.isLoggedIn;
    }
}
