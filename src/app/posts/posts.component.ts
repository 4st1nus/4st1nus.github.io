import { Component, OnInit } from '@angular/core';
import { Post } from './model/post';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from './posts-service/posts.service';
import { LoaderNames } from '../rest/service/rest-data.service';
import { RestOptions } from '../rest/model/rest-options';
import { LoaderService } from '../rest/service/loader.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  // Page size for the posts array. Will be increased by this value everytime
  // user scrolls down
  readonly POSTS_PER_PAGE = 50;

  // Attribute to store all posts from the web service
  allPosts: Post[] = [];
  // Attribute to store the posts which should be shown in the page
  posts: Post[] = [];
  // Property to hold the index of next post which should be added to the
  // posts array if the user scrolls down. Intial value is 0 and when the user
  // scrolls for the first time, then it is reset to 0 + POSTS_PER_PAGE Or size of
  // allPosts array which ever is minimum
  nextStart = 0;

  loaderNamesEnum = LoaderNames;
  constructor(
    private postsService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    public loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.nextStart = 0;

    const options = {
      link: { href: PostsService.POSTS_URL, method: RestOptions.GET },
      loaderNames: LoaderNames.service1
    } as RestOptions;

    // Get all posts and store it in allPosts array
    this.postsService.getPosts(options).subscribe((posts: Post[]) => {
      this.allPosts = posts;
      // populate posts array with maximum of POSTS_PER_PAGE number of posts
      this.onScrollDown();
    });
  }

  // Click even handler. When the user clicks on a post
  // this method makes a navigation to posts details page
  showDetails(post: Post) {
    this.router.navigate(['posts', post.id], { relativeTo: this.route });
  }

  // Infinite scroll handler. Called whenever user scrolls down
  // to the end of the page.
  onScrollDown() {
    // if the nextStart is less than the size of allPosts array
    // then take the next set of items and populates it into posts array
    if (this.nextStart < this.allPosts.length) {
      const from = this.nextStart;
      // add nextStart with POSTS_PER_PAGE or size of allPosts array which ever is minimum
      this.nextStart = Math.min(this.nextStart + this.POSTS_PER_PAGE, this.allPosts.length);
      this.posts.push(...this.allPosts.slice(from, this.nextStart));
    }
  }
}

