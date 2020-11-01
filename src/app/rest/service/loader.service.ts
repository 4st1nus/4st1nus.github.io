import { Injectable } from '@angular/core';

/**
 * LoaderService used to maintain the count of REST calls.
 * It has a public attribute {@link LoaderService#loaders} which
 * has the fields with key exactly same as keys of {@link LoaderNames}
 * It is used to show the {@link SpinnerComponent}
 */
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loaders = {
    service1: 0,
    service2: 0
  };
  constructor() { }
}
