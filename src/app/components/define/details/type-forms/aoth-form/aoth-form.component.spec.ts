import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AothFormComponent } from './aoth-form.component';

describe('AothFormComponent', () => {
  let component: AothFormComponent;
  let fixture: ComponentFixture<AothFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AothFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AothFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
