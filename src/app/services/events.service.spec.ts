import { TestBed } from '@angular/core/testing';

import { RacesService } from './events.service';

describe('RacesService', () => {
  let service: RacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
