import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcmpFormComponent } from './tcmp-form.component';

describe('TcmpFormComponent', () => {
  let component: TcmpFormComponent;
  let fixture: ComponentFixture<TcmpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcmpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
