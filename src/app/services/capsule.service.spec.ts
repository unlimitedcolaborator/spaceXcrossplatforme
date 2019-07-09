import { TestBed } from '@angular/core/testing';

import { CapsuleService } from './capsule.service';

describe('CapsuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapsuleService = TestBed.get(CapsuleService);
    expect(service).toBeTruthy();
  });
});
