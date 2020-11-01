import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';
import { RestDataService } from '../../rest/service/rest-data.service';
import { RestOptions } from '../../rest/model/rest-options';

describe('UsersService', () => {
  const mockDataService = jasmine.createSpyObj('RestDataService', ['request']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UsersService,
      { provide: RestDataService, useValue: mockDataService }]
  }));

  it('should be created', () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });

  describe('getIserById', () => {
    it('should call request method of RestDataService with right input', () => {
      const service = TestBed.get(UsersService);
      const restService = TestBed.get(RestDataService);
      const options = { link: { href: 'test', method: 'GET' } } as RestOptions;
      service.getUserById(options);

      expect(restService.request).toHaveBeenCalledWith(options);
    });
  });
});
