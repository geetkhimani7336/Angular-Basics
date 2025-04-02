import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.css'
})
export class ReactiveFormValidationComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    newPassword: new FormControl('')
    // same for 2nd also you can write like this->  newPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  onLoginFormSubmit(){
    console.log(this.loginForm.value)
  }

  // this is a type of getter setter in angular
  get user(){
    return this.loginForm.get('username');
  }
}
