import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {HomeComponent} from "./home/home.component";
import {NewsComponent} from "./news/news.component";
import { AuthGuardService } from "./guards/auth-guard.service";

const routes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuardService]},
    {path: 'register', component: UserRegistrationComponent},
    {path: 'login', component: UserLoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
    {path: 'news', component: NewsComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserRegistrationComponent, UserLoginComponent, HomeComponent, NewsComponent];
