import { TestBed } from '@angular/core/testing';

import { ApiCallsServicesService } from './api-calls-services.service';

describe('ApiCallsServicesService', () => {
  let service: ApiCallsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCallsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
