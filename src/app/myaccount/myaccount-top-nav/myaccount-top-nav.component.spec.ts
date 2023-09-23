import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountTopNavComponent } from './myaccount-top-nav.component';

describe('MyaccountTopNavComponent', () => {
  let component: MyaccountTopNavComponent;
  let fixture: ComponentFixture<MyaccountTopNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyaccountTopNavComponent]
    });
    fixture = TestBed.createComponent(MyaccountTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
