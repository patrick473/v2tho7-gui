import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleDetailsWrapperComponent } from './rule-details-wrapper.component';

describe('RuleDetailsWrapperComponent', () => {
  let component: RuleDetailsWrapperComponent;
  let fixture: ComponentFixture<RuleDetailsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleDetailsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleDetailsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
