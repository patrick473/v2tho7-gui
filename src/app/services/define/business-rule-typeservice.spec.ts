import { TestBed } from '@angular/core/testing';

import { BusinessRuleTypeService } from './business-rule-type.service';

describe('BusinessRuleTypeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessRuleTypeService = TestBed.get(BusinessRuleTypeService);
    expect(service).toBeTruthy();
  });
});
