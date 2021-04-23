import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDataComponent } from './form-data/form-data.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '', component: FormDataComponent, pathMatch: 'full'
  },
  {
    path: 'sign-up', component: LandingComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
