import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountDashboardComponent } from './myaccount-dashboard.component';

describe('MyaccountDashboardComponent', () => {
  let component: MyaccountDashboardComponent;
  let fixture: ComponentFixture<MyaccountDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyaccountDashboardComponent]
    });
    fixture = TestBed.createComponent(MyaccountDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
