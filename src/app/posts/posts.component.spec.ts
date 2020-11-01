import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { of } from 'rxjs';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { PostsService } from './posts-service/posts.service';
import { LoaderService } from '../rest/service/loader.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Post } from './model/post';
import { By } from '@angular/platform-browser';

describe('PostsComponent', () => {
  let fixture: ComponentFixture<PostsComponent>;
  let mockPostsService;
  let mockRouter;
  let mockActivatedRoute;
  let mockLoaderService;

  beforeEach(async(() => {
    mockPostsService = jasmine.createSpyObj('PostsService', ['getPosts']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockActivatedRoute = {
      params: of({ postId: 1 } as Params)
    };
    mockLoaderService = {
      loaders: {
        service1: 0,
        service2: 0
      }
    };
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [
        { provide: PostsService, useValue: mockPostsService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: LoaderService, useValue: mockLoaderService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    const postsService = TestBed.get(PostsService);
    const posts = [
      { id: 1, title: 'title', userId: 1, body: 'body' },
      { id: 2, title: 'title', userId: 1, body: 'body' },
      { id: 3, title: 'title', userId: 1, body: 'body' }
    ] as Post[];
    postsService.getPosts.and.returnValue(of(posts));

    fixture = TestBed.createComponent(PostsComponent);

  });

  it('should create', () => {
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });



  it('should inovke getPosts method', () => {
    const postsService = TestBed.get(PostsService);
    fixture.detectChanges();

    expect(postsService.getPosts).toHaveBeenCalled();
  });

  it('should initialize POSTS_PER_PAGE to 50', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.POSTS_PER_PAGE).toBe(50);
  });

  it('should populate allPosts with data received from postsService', fakeAsync(() => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    tick();

    expect(component.allPosts.length).toBe(3);
  }));

  it('should invoke onScollDown method during initial loading', fakeAsync(() => {
    const component = fixture.componentInstance;
    spyOn(component, 'onScrollDown');
    fixture.detectChanges();
    tick();

    expect(component.onScrollDown).toHaveBeenCalled();
  }));

  it('should add additional posts from allPosts when scrolling down', fakeAsync(() => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    tick();
    component.allPosts = [];
    component.nextStart = 0;
    component.posts = [];
    for (let i = 0; i < 150; i++) {
      component.allPosts.push(new Post());
    }

    component.onScrollDown();

    expect(component.nextStart).toBe(50);
    expect(component.posts.length).toBe(50);
  }));

  it('should not alter posts array if nextStart is greater than allPosts size', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    component.allPosts = [new Post()];
    component.posts = [];
    component.nextStart = 500;

    component.onScrollDown();

    expect(component.posts.length).toBe(0);
  });

  describe('showDetails', () => {
    it('should make a call to navigate method of router', () => {
      fixture.componentInstance.showDetails(new Post());

      expect(mockRouter.navigate).toHaveBeenCalled();
    });
  });

  describe('template', () => {
    it('should show 3 posts', fakeAsync(() => {
      fixture.detectChanges();
      tick();

      expect(fixture.debugElement.queryAll(By.css('.posts-article-wrapper')).length).toBe(3);
    }));
  });
});
