import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { Post } from '../model/post';
import { catchError, switchMap, map } from 'rxjs/operators';
import { PostsService } from '../posts-service/posts.service';
import { UsersService } from '../../users/users-service/users.service';
import { User } from '../../users/model/user';
import { RestOptions } from '../../rest/model/rest-options';
import { LoaderNames } from '../../rest/service/rest-data.service';
import { LoaderService } from '../../rest/service/loader.service';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit, OnDestroy {
  post: Post;
  user: User;
  // Subcription for the router params
  routeSubscription$: Subscription;
  loaderNamesEnum = LoaderNames;

  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
    // Listen for postId params changes and retrieve respective Post
    this.routeSubscription$ = this.route.params.subscribe((params: Params) => {
      const postId = +params.postId;
      this.loadPost(postId);
    });
  }

  ngOnDestroy() {
    // Unsubscribe the observer
    if (this.routeSubscription$) {
      this.routeSubscription$.unsubscribe();
    }
  }

  loadPost(postId: number) {
    // reset variables
    this.post = null;
    this.user = null;

    const options = {
      link: { href: '/posts/{postId}', method: RestOptions.GET },
      properties: { postId },
      loaderNames: LoaderNames.service1
    } as RestOptions;

    this.postsService.getPostById(options).pipe(
      // get post by id and populate the instance variable
      // once we receive the post, get the author of the post
      switchMap((post: Post) => {
        this.post = post;

        const userOption = {
          link: { href: '/users/{userId}', method: RestOptions.GET },
          properties: { userId: post.userId },
          loaderNames: LoaderNames.service2
        } as RestOptions;

        return this.usersService.getUserById(userOption);
      }),
      // populate the user variale from the REST respones
      map((user: User) => {
        this.user = user;
        return user;
      }))
      .subscribe();
  }

  // if the user clicks on back button, navigate to Home page
  showHomePage() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
