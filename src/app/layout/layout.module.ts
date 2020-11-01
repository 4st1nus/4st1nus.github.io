import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ToasterModule } from 'angular2-toaster';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    SharedModule,
    RouterModule,
    ToasterModule.forChild()
  ],
  exports: [
    LayoutComponent, HeaderComponent, FooterComponent
  ]
})
export class LayoutModule { }
