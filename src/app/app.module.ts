import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginService} from "./components/login/login-service.component";

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [LoginComponent]
})
export class AppModule { }
