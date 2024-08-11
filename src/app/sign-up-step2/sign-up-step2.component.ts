import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sign-up-step2',
  templateUrl: './sign-up-step2.component.html',
  styleUrls: ['./sign-up-step2.component.css']
})
export class SignUpStep2Component {
  // Define the signUpData property
  signUpData = {
    organization: '',
    designation: '',
    birthdate: '',
    city: '',
    pincode: ''
  };

  organizationError = false;
  pincodeError = false;
  designations = ['Manager', 'Developer', 'Designer', 'Analyst'];

  constructor(private parent: AppComponent) {}

  validateOrganization() {
    // Example validation logic for organization
    const allowedOrganizations = ['Company1', 'Company2', 'Company3'];
    if (!allowedOrganizations.includes(this.signUpData.organization)) {
      this.organizationError = true;
    } else {
      this.organizationError = false;
    }
  }

  validatePincode() {
    if (this.signUpData.pincode.toString().length !== 6) {
      this.pincodeError = true;
    } else {
      this.pincodeError = false;
    }
  }

  onBack() {
    this.parent.previousStep();
  }

  onSubmit() {
    if (!this.organizationError && !this.pincodeError) {
      // Submit the form data to the backend or proceed to the next step
      // console.log('Form submitted:', this.signUpData);
      this.parent.currentStep = 3;
    }
  }
}
