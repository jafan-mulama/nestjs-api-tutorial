import { Component } from '@angular/core';

@Component({
  selector: 'welcome-dashboard',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent{

  onNext(): void {
    // Add your logic here for handling the "Next" button click
    console.log('Next button clicked');
  }
}
