import { Component, OnInit, OnDestroy } from '@angular/core';
import {pipe, Subscription} from "rxjs";
import { first } from "rxjs/operators";

import { User } from "../models/User";
import { UserService } from "../services/user.service";
import { AuthenticationService } from "../services/authentication.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {this.currentUser = user})
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number){
    this.userService.delete(id).pipe(first()).subscribe(() =>{
      this.loadAllUsers()
    });
  }


  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }



}
