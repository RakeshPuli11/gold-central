import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotcredentialsComponent } from './forgotcredentials.component';

describe('ForgotcredentialsComponent', () => {
  let component: ForgotcredentialsComponent;
  let fixture: ComponentFixture<ForgotcredentialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgotcredentialsComponent]
    });
    fixture = TestBed.createComponent(ForgotcredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
