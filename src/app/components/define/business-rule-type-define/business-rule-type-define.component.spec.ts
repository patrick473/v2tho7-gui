import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRuleTypeDefineComponent } from './business-rule-type-define.component';

describe('BusinessRuleTypeDefineComponent', () => {
  let component: BusinessRuleTypeDefineComponent;
  let fixture: ComponentFixture<BusinessRuleTypeDefineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessRuleTypeDefineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessRuleTypeDefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
