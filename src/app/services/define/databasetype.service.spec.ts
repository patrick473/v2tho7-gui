import { TestBed } from '@angular/core/testing';

import { DatabasetypeService } from './databasetype.service';

describe('DatabasetypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabasetypeService = TestBed.get(DatabasetypeService);
    expect(service).toBeTruthy();
  });
});
