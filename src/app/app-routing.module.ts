import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpStep1Component } from './sign-up-step1/sign-up-step1.component';
import { SignUpStep2Component } from './sign-up-step2/sign-up-step2.component';


const routes: Routes = [
  { path: '', redirectTo: '/sign-up-step1', pathMatch: 'full' },
  { path: 'sign-up-step1', component: SignUpStep1Component },
  { path: 'sign-up-step2', component: SignUpStep2Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}