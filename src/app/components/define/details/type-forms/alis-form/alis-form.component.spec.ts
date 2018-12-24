import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlisFormComponent } from './alis-form.component';

describe('AlisFormComponent', () => {
  let component: AlisFormComponent;
  let fixture: ComponentFixture<AlisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
