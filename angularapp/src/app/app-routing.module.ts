import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './basic-routing/home/home.component';
import { AboutComponent } from './basic-routing/about/about.component';
import { NoPage404Component } from './no-page404/no-page404.component';
import { AboutCompanyComponent } from './basic-routing/about-company/about-company.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {path:'company', component: AboutCompanyComponent}
    ]
  },
  {
    path:'**',     //ye "**" hi actually wild card hote hai means koi bhi route hamara match yadi nahi hoga to ye vala page hamara oprn hojaega
    component: NoPage404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
