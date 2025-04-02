import { TestBed } from '@angular/core/testing';

import { UserSvcService } from './user-svc.service';

describe('UserSvcService', () => {
  let service: UserSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
