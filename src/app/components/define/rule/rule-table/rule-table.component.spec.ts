import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleTableComponent } from './rule-table.component';

describe('RuleTableComponent', () => {
  let component: RuleTableComponent;
  let fixture: ComponentFixture<RuleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
