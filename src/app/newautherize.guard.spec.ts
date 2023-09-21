import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { newautherizeGuard } from './newautherize.guard';

describe('newautherizeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => newautherizeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
