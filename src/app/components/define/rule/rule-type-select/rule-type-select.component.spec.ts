import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleTypeSelectComponent } from './rule-type-select.component';

describe('RuleTypeSelectComponent', () => {
  let component: RuleTypeSelectComponent;
  let fixture: ComponentFixture<RuleTypeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleTypeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
