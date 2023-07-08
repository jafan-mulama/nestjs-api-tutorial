import { Component } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit() {
    console.log('User:', this.user);
    // You can add your registration logic here
  }
}
