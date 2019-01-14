import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationComponent } from './user-registration.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ UserRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('when password not the same should form be invalid', () => {
    expect(component.form.valid).toBeFalsy();

    let {nick_name, password, confirm_password} = component.form.controls;

    nick_name.setValue("something");
    password.setValue("password");
    confirm_password.setValue("misspelled_password");

    expect(component.form.valid).toBeFalsy("Form should be invalid");
  });
});

