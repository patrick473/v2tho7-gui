import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcmpFormComponent } from './icmp-form.component';

describe('IcmpFormComponent', () => {
  let component: IcmpFormComponent;
  let fixture: ComponentFixture<IcmpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcmpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
