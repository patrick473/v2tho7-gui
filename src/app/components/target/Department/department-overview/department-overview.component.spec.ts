import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentOverviewComponent } from './department-overview.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DepartmentOverviewComponent', () => {
  let component: DepartmentOverviewComponent;
  let fixture: ComponentFixture<DepartmentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentOverviewComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
