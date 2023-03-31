import { TestBed } from '@angular/core/testing';

import { WxDataService } from './wxdata.service';

describe('WxdataService', () => {
  let service: WxDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WxDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
