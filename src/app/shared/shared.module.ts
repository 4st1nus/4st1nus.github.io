import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSeparatorComponent } from './components/content-separator/content-separator.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [ContentSeparatorComponent, SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    // Modules
    CommonModule,
    // Components
    ContentSeparatorComponent, SpinnerComponent
  ]
})
export class SharedModule { }
