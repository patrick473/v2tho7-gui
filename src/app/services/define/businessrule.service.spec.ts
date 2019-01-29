import { TestBed } from '@angular/core/testing';

import { BusinessruleService } from './businessrule.service';

describe('BusinessruleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessruleService = TestBed.get(BusinessruleService);
    expect(service).toBeTruthy();
  });
});
