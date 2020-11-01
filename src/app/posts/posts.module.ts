import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { SharedModule } from '../shared/shared.module';
import { PostsServiceModule } from './posts-service/posts-service.module';
import { UsersServiceModule } from '../users/users-service/users-service.module';


const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts/:postId', component: PostsDetailComponent }
];

@NgModule({
  declarations: [PostsComponent, PostsDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    InfiniteScrollModule,
    PostsServiceModule,
    UsersServiceModule
  ],
  providers: []
})
export class PostsModule { }
