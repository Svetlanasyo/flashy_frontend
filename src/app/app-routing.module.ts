import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRegistrationComponent} from "./user-registration/user-registration.component";
import {UserLoginComponent} from "./user-login/user-login.component";

const routes: Routes = [
    {path: 'register', component: UserRegistrationComponent},
    {path: 'login', component: UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserRegistrationComponent, UserLoginComponent];