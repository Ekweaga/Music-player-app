import { TestBed } from '@angular/core/testing';

import { BoommackService } from './boommack.service';

describe('BoommackService', () => {
  let service: BoommackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoommackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
