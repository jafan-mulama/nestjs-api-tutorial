import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionLoanComponent } from './production-loan.component';

describe('ProductionLoanComponent', () => {
  let component: ProductionLoanComponent;
  let fixture: ComponentFixture<ProductionLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionLoanComponent]
    });
    fixture = TestBed.createComponent(ProductionLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
