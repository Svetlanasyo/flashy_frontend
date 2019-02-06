import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import { NewsComponent } from './news/news.component';

// import { UserRegistrationComponent } from './user-registration/user-registration.component';
// import { HomeComponent } from './home/home.component';
// import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
      routingComponents,
    // UserRegistrationComponent,
      AlertComponent,
    NavbarComponent,
    FooterComponent,
    AlertComponent,
    // NewsComponent,
    // HomeComponent,
    // UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
