import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Class1Component } from './class1/class1.component';



@NgModule({
  declarations: [
    Class1Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Class1Component
  ]
})
export class UserAuthenticationModule { }
