import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  user: User;
  formRegister: FormGroup;

  ngOnInit() {
    this.user = new User();
    this.formRegister = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
      ]),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),
        zip: new FormControl('', Validators.required)
      }),
      phones: new FormArray([new FormControl('', Validators.required)])
    });
  }

  get phones() {
    return this.formRegister.get('phones') as FormArray;
  }

  addPhone() {
    this.phones.push(new FormControl('', Validators.required));
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  save() {
    this.user = this.formRegister.getRawValue();
    console.log(this.user);
    // Call service to persist user here
  }
}
