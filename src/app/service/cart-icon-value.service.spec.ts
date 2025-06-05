import { TestBed } from '@angular/core/testing';

import { CartIconValueService } from './cart-icon-value.service';

describe('CartIconValueService', () => {
  let service: CartIconValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartIconValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
