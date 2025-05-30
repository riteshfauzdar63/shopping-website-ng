import { TestBed } from '@angular/core/testing';

import { LocalStorageSessionDataService } from './local-storage-session-data.service';

describe('LocalStorageSessionDataService', () => {
  let service: LocalStorageSessionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageSessionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
