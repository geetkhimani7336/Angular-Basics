import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// FormGroup -> pure form ko ek group me banake rakhega
// FormControl -. pure form ko control karega (ye hamehsa "FormGroup" ke andar hota hai) 
// jo ki main input field(name,pass) ko control krta hai
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  loginForm= new FormGroup({    //key:value pair 
    user: new FormControl('You can give bydefault name/pass here'),
    password: new FormControl('')
  })
  loginSubmit(){
    console.log("Reactive form value is->", this.loginForm.value);
  }
}
