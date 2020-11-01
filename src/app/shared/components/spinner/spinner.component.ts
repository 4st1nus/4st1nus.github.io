import { Component, OnInit, Input } from '@angular/core';


/**
 * Spinner component - To show the spinner whenever an REST api call is made
 * A counter is maintained for each servicec call in {@link loaderService}.
 * This counter will be used to show/hide the spinner
 * @example <app-spinner [showLoader]="!!loaderService.service1"></app-spinner>
 */
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  /**
   * @input {boolean} showLoader - To show/hide the loader.
   * Usualy from {@link loaderService}
   */
  @Input() showLoader: boolean;

  constructor() { }

  ngOnInit() {
  }

}
