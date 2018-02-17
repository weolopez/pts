import { TestBed, inject } from '@angular/core/testing';

import { MlsSiteService } from './mls-site.service';

describe('MlsSiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MlsSiteService]
    });
  });

  it('should be created', inject([MlsSiteService], (service: MlsSiteService) => {
    expect(service).toBeTruthy();
  }));
});
