import { TestBed } from '@angular/core/testing';

import { GetSingleProductService } from './get-single-product.service';

describe('GetSingleProductService', () => {
  let service: GetSingleProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSingleProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
