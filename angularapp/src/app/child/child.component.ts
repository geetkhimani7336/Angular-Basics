import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() 
    item:string ='hello'
  @Input() 
    myDataArray:number[] = [];   //write "string" instead of "number" if you are have aaray with strings like : ["apple", "banana"] here is string values inside array
  @Input()
    myDataObj:any = {} //initialises with empty object {}
  @Output()
    getDataFromChildComponentEvent= new EventEmitter<string>();
}
