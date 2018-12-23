import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateOverviewComponent } from './generate-overview.component';

describe('GenerateOverviewComponent', () => {
  let component: GenerateOverviewComponent;
  let fixture: ComponentFixture<GenerateOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
