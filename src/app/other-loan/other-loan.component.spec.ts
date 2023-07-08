import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLoanComponent } from './other-loan.component';

describe('OtherLoanComponent', () => {
  let component: OtherLoanComponent;
  let fixture: ComponentFixture<OtherLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherLoanComponent]
    });
    fixture = TestBed.createComponent(OtherLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
