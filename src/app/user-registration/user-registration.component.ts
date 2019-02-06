import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { first } from "rxjs/operators";

import { AlertService } from "../services/alert-service.service";
import { UserService } from "../services/user.service";
import { AuthenticationService } from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private alertService: AlertService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/'])
    }
  }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f() {return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return
    }
    this.loading = true;
    console.log(this.registerForm.value);
    this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
              console.log(data)
              this.alertService.success("Registration successfull", true);
              this.router.navigate(['/login'])
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            }
        );
  }



  }
