import { TestBed } from '@angular/core/testing';

import { GodDetailsService } from './god-details.service';

describe('GodDetailsService', () => {
  let service: GodDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GodDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
