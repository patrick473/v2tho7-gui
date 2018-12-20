import { TestBed } from '@angular/core/testing';

import { DefineService } from './define.service';

describe('DefineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DefineService = TestBed.get(DefineService);
    expect(service).toBeTruthy();
  });
});
