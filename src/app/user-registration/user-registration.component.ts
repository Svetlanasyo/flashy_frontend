import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  form : FormGroup;

  constructor() {
    this.form = new FormGroup({

      "nick_name": new FormControl("", Validators.required),
      "password": new FormControl("", [Validators.required,
        Validators.min(4)]),
      "confirm_password": new FormControl("", [Validators.required,
        Validators.min(4), /*this.checkPasswordForEquals*/]),
    });
  }


  ngOnInit(): void {

  }

//   checkPasswordForEquals(control: FormControl) {
//     if (control.value.)
// }

  register(){
    console.log(this.form);
  }
  }
