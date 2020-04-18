import { TestBed } from '@angular/core/testing';

import { GetChannelsService } from './get-channels.service';

describe('GetChannelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetChannelsService = TestBed.get(GetChannelsService);
    expect(service).toBeTruthy();
  });
});
