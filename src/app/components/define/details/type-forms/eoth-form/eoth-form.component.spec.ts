import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EothFormComponent } from './eoth-form.component';

describe('EothFormComponent', () => {
  let component: EothFormComponent;
  let fixture: ComponentFixture<EothFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EothFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EothFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
