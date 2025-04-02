import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserAuthenticationModule} from "./user-authentication/user-authentication.module";
import { ChildComponent } from './child/child.component';
import { UsdToInrConvertPipe } from './pipe/usd-to-inr-convert.pipe';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';   


// for basic forms
import {FormsModule} from "@angular/forms";   //importing so that we can use ng-form in th child component for forms
import {ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';

//http client call krne k lie hota hai yeh
import { HttpClientModule } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './basic-routing/home/home.component';
import { AboutComponent } from './basic-routing/about/about.component';
import { NoPage404Component } from './no-page404/no-page404.component';
import { AboutCompanyComponent } from './basic-routing/about-company/about-company.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({  //this is a root module, if you want to make any new module then you have to register here
  declarations: [  //service declaration comes here
    AppComponent, ChildComponent, UsdToInrConvertPipe, BasicFormComponent, ReactiveFormComponent, ReactiveFormValidationComponent, HomeComponent, AboutComponent, NoPage404Component, AboutCompanyComponent, FooterComponent
  ],
  imports: [  // all imports of module comes here
    BrowserModule,
    AppRoutingModule,
    UserAuthenticationModule,     //new module registered
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
