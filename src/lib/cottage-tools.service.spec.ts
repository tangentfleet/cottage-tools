import { TestBed } from '@angular/core/testing';

import { CottageToolsService } from './cottage-tools.service';

describe('CottageToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CottageToolsService = TestBed.get(CottageToolsService);
    expect(service).toBeTruthy();
  });
});
