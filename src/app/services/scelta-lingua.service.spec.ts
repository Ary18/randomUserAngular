import { TestBed, inject } from '@angular/core/testing';

import { SceltaLinguaService } from './scelta-lingua.service';

describe('SceltaLinguaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SceltaLinguaService]
    });
  });

  it('should be created', inject([SceltaLinguaService], (service: SceltaLinguaService) => {
    expect(service).toBeTruthy();
  }));
});
