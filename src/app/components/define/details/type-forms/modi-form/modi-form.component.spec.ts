import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiFormComponent } from './modi-form.component';

describe('ModiFormComponent', () => {
  let component: ModiFormComponent;
  let fixture: ComponentFixture<ModiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
