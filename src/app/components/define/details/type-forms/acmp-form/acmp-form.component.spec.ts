import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcmpFormComponent } from './acmp-form.component';

describe('AcmpFormComponent', () => {
  let component: AcmpFormComponent;
  let fixture: ComponentFixture<AcmpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcmpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
