import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsServicesService {

  private url="https://swapi.dev/api/planets";

  constructor(private http: HttpClient) {  // calling http-client service through constructor

  }
  
  getPlanets() {
    return this.http.get(this.url);
  }
}
