import { TestBed } from '@angular/core/testing';

import { MedButtonService } from './med-button.service';

describe('MedButtonService', () => {
  let service: MedButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
