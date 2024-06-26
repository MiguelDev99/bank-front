import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSaveComponent } from './customer-save.component';

describe('CustomerSaveComponent', () => {
  let component: CustomerSaveComponent;
  let fixture: ComponentFixture<CustomerSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSaveComponent]
    });
    fixture = TestBed.createComponent(CustomerSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
