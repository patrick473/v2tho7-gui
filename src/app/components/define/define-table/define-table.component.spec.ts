import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineTableComponent } from './define-table.component';

describe('DefineTableComponent', () => {
  let component: DefineTableComponent;
  let fixture: ComponentFixture<DefineTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
