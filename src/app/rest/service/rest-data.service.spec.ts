import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestDataService, LoaderNames } from './rest-data.service';
import { LoaderService } from './loader.service';
import { RestOptions } from '../model/rest-options';
import { catchError } from 'rxjs/operators';
import { Post } from '../../posts/model/post';
import { ToasterService } from 'angular2-toaster';

describe('RestDataService', () => {
  const mockLoaderService = {
    loaders: { service1: 0, service2: 0 }
  };
  const mockToaster = jasmine.createSpyObj('ToasterService', ['pop']);
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: LoaderService, useValue: mockLoaderService },
        { provide: ToasterService, useValue: mockToaster }
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service = TestBed.get(RestDataService);
    expect(service).toBeTruthy();
  });

  it('should throw error when RestOptions does not have a link', () => {
    const option = new RestOptions();
    const service = TestBed.get(RestDataService);

    expect(() => service.request(option).subscribe()).toThrow(new Error('Link is NULL'));
  });

  it('should fire an http request with proper url', () => {
    const option = {
      link: { href: '/posts/{postId}', method: RestOptions.GET },
      properties: { postId: 1 }
    };
    const reqUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    const service = TestBed.get(RestDataService);
    service.request(option).subscribe((post: Post) => {
      expect(post.id).toBe(4);
    });

    const req = httpTestingController.expectOne(reqUrl);

    req.flush({ id: 4, title: 'test', body: 'test' } as Post);
    httpTestingController.verify();
  });

  it('should throw exception when http throws exception', () => {
    const option = {
      link: { href: '/posts/{postId}', method: RestOptions.GET },
      properties: { postId: 1 }
    };
    const reqUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    const service = TestBed.get(RestDataService);

    service.request(option)
      .subscribe(() => { }, error => {
        expect(error).toBeTruthy();
      });

    const req = httpTestingController.expectOne(reqUrl);
    req.error({ message: 'Incorrect Url' } as ErrorEvent);
    httpTestingController.verify();
  });

  it('should send query params to http if options has query params', () => {
    const option = {
      link: { href: '/posts/{postId}?param={param}', method: RestOptions.GET },
      properties: { postId: 1, param: 'test' },
      loaderNames: LoaderNames.service1
    } as RestOptions;
    const reqUrl = 'https://jsonplaceholder.typicode.com/posts/1?param=test';
    const service = TestBed.get(RestDataService);
    service.request(option).subscribe((post: Post) => {
      expect(post.id).toBe(4);
    });

    const req = httpTestingController.expectOne(reqUrl);

    req.flush({ id: 4, title: 'test', body: 'test' } as Post);
    httpTestingController.verify();
  });
});
