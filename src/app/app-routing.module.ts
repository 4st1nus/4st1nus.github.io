import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

/**
 * App Routes
 */
const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      // Redirect to home page when base url is called
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      // Lazy load posts module
      { path: 'home', loadChildren: () => import('./posts/posts.module').then(mod => mod.PostsModule) },
      // Wildcard check. When url does not match anything, go to home page
      { path: '**', redirectTo: 'home' }
    ] as Routes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // Using hash location strategy
    { useHash: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
