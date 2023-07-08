import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PolicyComponent } from './policy/policy.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessLoanComponent } from './business-loan/business-loan.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { InstantLoanComponent } from './instant-loan/instant-loan.component';
import { OtherLoanComponent } from './other-loan/other-loan.component';
import { CarLoanComponent } from './car-loan/car-loan.component';
import { EducationLoanComponent } from './education-loan/education-loan.component';
import { ProductionLoanComponent } from './production-loan/production-loan.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PolicyComponent,
    WelcomepageComponent,
    DashboardComponent,
    BusinessLoanComponent,
    HomeLoanComponent,
    InstantLoanComponent,
    OtherLoanComponent,
    CarLoanComponent,
    EducationLoanComponent,
    ProductionLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
