import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PostsDetailComponent } from './posts-detail.component';
import { of } from 'rxjs';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts-service/posts.service';
import { UsersService } from '../../users/users-service/users.service';
import { LoaderService } from '../../rest/service/loader.service';
import { HeaderComponent } from '../../layout/header/header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Post } from '../model/post';
import { User } from '../../users/model/user';
import { By } from '@angular/platform-browser';

describe('PostsDetailComponent', () => {
  let component: PostsDetailComponent;
  let fixture: ComponentFixture<PostsDetailComponent>;
  let mockPostsService;
  let mockUsersService;
  let mockRouter;
  let mockActivatedRoute;
  let mockLoaderService;

  beforeEach(async(() => {

    mockPostsService = jasmine.createSpyObj('PostsService', ['getPostById']);
    mockUsersService = jasmine.createSpyObj('UsersService', ['getUserById']);
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
      declarations: [PostsDetailComponent],
      providers: [
        { provide: PostsService, useValue: mockPostsService },
        { provide: UsersService, useValue: mockUsersService },
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
    const post = { id: 1, title: 'title', userId: 1, body: 'body' } as Post;
    postsService.getPostById.and.returnValue(of(post));

    const usersService = TestBed.get(UsersService);
    const user = { id: 1, name: 'name', username: 'username', website: 'website' } as User;
    usersService.getUserById.and.returnValue(of(user));

    fixture = TestBed.createComponent(PostsDetailComponent);

  });

  it('should create', () => {
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should invoke loadPost method', () => {
    component = fixture.componentInstance;
    spyOn(component, 'loadPost');
    fixture.detectChanges();

    expect(component.loadPost).toHaveBeenCalled();
  });

  it('should retrieve post with id 1 and user with id 1', fakeAsync(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
    tick();

    expect(component.post.id).toBe(1);
    expect(component.user.id).toBe(1);
  }));

  describe('template', () => {
    it('should show title, body, name, username and website', fakeAsync(() => {
      component = fixture.componentInstance;
      fixture.detectChanges();
      tick();

      expect(fixture.debugElement.query(By.css('#title')).nativeElement.textContent).toContain('title');
      expect(fixture.debugElement.query(By.css('#body')).nativeElement.textContent).toContain('body');
      expect(fixture.debugElement.query(By.css('#name')).nativeElement.textContent).toContain('name');
      expect(fixture.debugElement.query(By.css('#username')).nativeElement.textContent).toContain('username');
      expect(fixture.debugElement.query(By.css('#website')).nativeElement.textContent).toContain('website');
    }));

    it('should call router navigate when clicked on back button', fakeAsync(() => {
      component = fixture.componentInstance;
      fixture.detectChanges();
      tick();
      fixture.debugElement.query(By.css('#back')).triggerEventHandler('click', null);
      expect(mockRouter.navigate).toHaveBeenCalled();
    }));
  });
});
