import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpStep1Component } from './sign-up-step1/sign-up-step1.component';
import { SignUpStep2Component } from './sign-up-step2/sign-up-step2.component';
import { SignUpSuccessComponent } from './sign-up-success/sign-up-success.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpStep1Component,
    SignUpStep2Component,
    SignUpSuccessComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
