import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.css'
})
export class BasicFormComponent {
   formName="My Basic Form"
   formData={}

   onSubmitForm(val:NgForm){
      console.log("--form", val)
      this.formData=val;
   }
}
