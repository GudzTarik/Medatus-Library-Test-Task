import { TestBed } from '@angular/core/testing';

import { MedButtonGroupService } from './med-button-group.service';

describe('MedButtonGroupService', () => {
  let service: MedButtonGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedButtonGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
