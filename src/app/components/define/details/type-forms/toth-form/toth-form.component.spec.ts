import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TothFormComponent } from './toth-form.component';

describe('TothFormComponent', () => {
  let component: TothFormComponent;
  let fixture: ComponentFixture<TothFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TothFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TothFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
