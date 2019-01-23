import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {HomeComponent} from "./home/home.component";
import {NewsComponent} from "./news/news.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'register', component: UserRegistrationComponent},
    {path: 'login', component: UserLoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserRegistrationComponent, UserLoginComponent, HomeComponent, NewsComponent];