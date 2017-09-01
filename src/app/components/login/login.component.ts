import {Component} from "@angular/core";
import {User} from "../../models/User";
import {LoginService} from "./login-service.component";


@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService: LoginService) {

  }

  user = new User();

  loginMethod() {
    this.loginService.login(this.user);
  }
}
