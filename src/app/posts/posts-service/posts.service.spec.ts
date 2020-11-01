import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { RestDataService } from '../../rest/service/rest-data.service';
import { RestOptions } from '../../rest/model/rest-options';

describe('PostsService', () => {
  const mockDataService = jasmine.createSpyObj('RestDataService', ['request']);
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PostsService,
      { provide: RestDataService, useValue: mockDataService }
    ]
  }));

  it('should be created', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  });

  describe('getPosts', () => {
    it('should call request method of RestDataService with right input', () => {
      const service = TestBed.get(PostsService);
      const restService = TestBed.get(RestDataService);
      const options = { link: { href: 'test', method: 'GET' } } as RestOptions;
      service.getPosts(options);

      expect(restService.request).toHaveBeenCalledWith(options);
    });
  });

  describe('getPostById', () => {
    it('should call request method of RestDataService with right input', () => {
      const service = TestBed.get(PostsService);
      const restService = TestBed.get(RestDataService);
      const options = { link: { href: 'test', method: 'GET' } } as RestOptions;
      service.getPostById(options);

      expect(restService.request).toHaveBeenCalledWith(options);
    });
  });
});
