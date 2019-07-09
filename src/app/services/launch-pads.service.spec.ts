import { TestBed } from '@angular/core/testing';

import { LaunchPadsService } from './launch-pads.service';

describe('LaunchPadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaunchPadsService = TestBed.get(LaunchPadsService);
    expect(service).toBeTruthy();
  });
});
