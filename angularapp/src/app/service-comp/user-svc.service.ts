import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSvcService {

  constructor() { }
  users(){
    return [
      {name:'Anil', age:28, email:'anil@test.com'},
      {name:'Bhou', age:22, email:'bhou@test.com'},
    ]
  }
}
