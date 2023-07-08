import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components for the loan pages
import { BusinessLoanComponent } from './business-loan/business-loan.component';
import { EducationLoanComponent } from './education-loan/education-loan.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { InstantLoanComponent } from './instant-loan/instant-loan.component';
import { OtherLoanComponent } from './other-loan/other-loan.component';
import { ProductionLoanComponent } from './production-loan/production-loan.component';
import { CarLoanComponent } from './car-loan/car-loan.component';

const routes: Routes = [
  { path: 'business-loan', component: BusinessLoanComponent },
  { path: 'education-loan', component: EducationLoanComponent },
  { path: 'home-loan', component: HomeLoanComponent },
  { path: 'instant-loan', component: InstantLoanComponent },
  { path: 'other-loan', component: OtherLoanComponent },
  { path: 'production-loan', component: ProductionLoanComponent },
  { path: 'car-loan', component: CarLoanComponent },
  // Add additional routes if needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
