import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArngFormComponent } from './arng-form.component';

describe('ArngFormComponent', () => {
  let component: ArngFormComponent;
  let fixture: ComponentFixture<ArngFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArngFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArngFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
