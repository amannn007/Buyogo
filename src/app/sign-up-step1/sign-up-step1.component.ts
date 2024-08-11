import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sign-up-step1',
  templateUrl: './sign-up-step1.component.html',
  styleUrls: ['./sign-up-step1.component.css']
})
export class SignUpStep1Component {
  signUpData = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private parent: AppComponent) { }

  onNext() {
    localStorage.setItem('signUpStep1Data', JSON.stringify(this.signUpData));
    this.parent.nextStep();
  }

  ngOnInit() {
    const savedData = localStorage.getItem('signUpStep1Data');
    if (savedData) {
      this.signUpData = JSON.parse(savedData);
    }
  }
}
