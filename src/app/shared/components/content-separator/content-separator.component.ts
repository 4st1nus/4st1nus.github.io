import { Component, OnInit } from '@angular/core';

/**
 * Content Separator - A Component to separate the main page content
 * into 'Main Content' & 'Context' and show them using bootstrap grid.
 * It uses Angular's transclution concept.
 * @example
 *  Anything that should be displayed in main area should be wrapped with a div
 * elment witih class 'main-content' & anything that should be displayed in
 * context area should be wrapped with a div element with class 'context'.
 * <app-content-separator>
 *      <div class="main-content"> show details in main area</div>
 *      <div class="context"> show details in context area </div>
 * </app-content-separator>
 */
@Component({
  selector: 'app-content-separator',
  templateUrl: './content-separator.component.html',
  styleUrls: ['./content-separator.component.scss']
})
export class ContentSeparatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
