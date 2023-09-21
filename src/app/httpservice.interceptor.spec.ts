import { TestBed } from '@angular/core/testing';

import { HttpserviceInterceptor } from './httpservice.interceptor';

describe('HttpserviceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpserviceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpserviceInterceptor = TestBed.inject(HttpserviceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
