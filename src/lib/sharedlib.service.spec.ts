import { TestBed } from '@angular/core/testing';

import { SharedlibService } from './sharedlib.service';

describe('SharedlibService', () => {
  let service: SharedlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
