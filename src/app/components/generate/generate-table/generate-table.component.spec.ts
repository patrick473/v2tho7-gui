import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTableComponent } from './generate-table.component';

describe('GenerateTableComponent', () => {
  let component: GenerateTableComponent;
  let fixture: ComponentFixture<GenerateTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
