import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineOverviewComponent } from './define-overview.component';

describe('DefineOverviewComponent', () => {
  let component: DefineOverviewComponent;
  let fixture: ComponentFixture<DefineOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
