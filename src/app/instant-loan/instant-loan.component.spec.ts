import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantLoanComponent } from './instant-loan.component';

describe('InstantLoanComponent', () => {
  let component: InstantLoanComponent;
  let fixture: ComponentFixture<InstantLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstantLoanComponent]
    });
    fixture = TestBed.createComponent(InstantLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
