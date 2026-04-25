import { Component } from '@angular/core';
import {UserSvcService} from "./service-comp/user-svc.service"; //importing so that we can use service class function in our app component
import { ApiCallsServicesService } from './api-calls/api-calls-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // string value '' single quote and for js "" double quote
  title = 'angularapp';
  data = "Hey! I am from .ts file";
  showIfCondition=true;
  displayVal='';
  displayName='';
  showHeader= false;
  arr1=['geet', 'h','j', 'k', 'l'];
  color= 'green';
  inputValue1='';
  disabledInp = true;
  sendDataToChild='Hello Child! I am from Parent Component';
  arraysData=[12,32,1,45,22];
  obj1 = {
    name:'geet',
    class:'12th'
  };
  gotOutput=[];
  myname="my name is comp from world";
  mydate = Date();
  users:any=[];
  text="geet"; 
  planets:any =[];
  childrensId=''

  // Service class call and http-service calls for api's
  constructor(private userdt: UserSvcService, private httpService: ApiCallsServicesService){
    // calling the service class
    this.users=userdt.users();
  }
  getValue(name: string, secondName: string){
    alert("function is called " +name + " and " + secondName);
  }

  // understand events
  getData(val:any){
    console.log("function val->", val);
  }

  getInpValue(val:any, val2:any){
    console.log("input value is ", val, " and ", val2);
    this.displayVal= val;
    this.displayName= val2;
  }

  getValueFromInput(val:any){
    this.inputValue1=val;
    this.disabledInp=false
  }
  updateChildComponentValue(val:string){
    this.sendDataToChild=val;
  }

  getDataFromChildComponent(val:any){
    console.log("--value", val);
  }

  updateTheStateValue(val:any){
    this.gotOutput=val;
  }

  // ----- for api calls -----
  showChilds(val:any){
    this.childrensId=val;
  }

  ngOnInit() {
    this.httpService.getPlanets().subscribe(
    (response) => { 
      this.planets=response
      console.log("response--", response);
      
    },
    (error) => { console.log(error); });
  }
  
}
