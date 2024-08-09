import { TestBed } from '@angular/core/testing';

import { DisplayUserDataService } from './display-user-data.service';

describe('DisplayUserDataService', () => {
  let service: DisplayUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
