import { Injectable } from '@angular/core';
import { RestOptions } from '../../rest/model/rest-options';
import { Observable } from 'rxjs';
import { Post } from '../model/post';
import { RestDataService } from '../../rest/service/rest-data.service';
import { PostsServiceModule } from './posts-service.module';


@Injectable({
  providedIn: PostsServiceModule
})
export class PostsService {
  // Url Constants for POST Apis
  static readonly POSTS_URL = '/posts';
  static readonly POSTS_BY_ID_URL = '/posts/{postId}';

  constructor(private dataService: RestDataService) { }

  /**
   * Method to get all Users
   * @param options  Instance of {@link RestOptions}
   * @returns Observable of Array<{@link Post}>
   */
  getPosts(options: RestOptions): Observable<Post[]> {
    return this.dataService.request<Post[]>(options);
  }

  /**
   * Method to get post by the post id
   * @param options  Instance of {@link RestOptions}
   * @returns Observable of {@link Post}
   */
  getPostById(options: RestOptions): Observable<Post> {
    return this.dataService.request<Post>(options);
  }
}
