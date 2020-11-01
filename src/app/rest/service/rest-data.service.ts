import { Injectable } from '@angular/core';
import { RestOptions } from '../model/rest-options';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { ToasterService } from 'angular2-toaster';

/**
 * LoaderNames - Enum to maintain the names for each loaders.
 * If we need 3 loaders/spinners in a page, then we should create
 * three properties in this enum.
 */
export enum LoaderNames {
  service1 = 'service1', service2 = 'service2'
}
/**
 * RestDataService - All http calls should be fired from this service calls.
 * This is good to maintain loaders, error handling in only one place.
 */
@Injectable({
  providedIn: 'root'
})
export class RestDataService {

  constructor(private http: HttpClient, private loaderService: LoaderService, private toaster: ToasterService) { }


  /**
   * Generic method exposed to outside to make any REST api calls
   * @param options instance of {@link RestOptions}
   * @returns Observable<T>
   * @example
   * const option = {
   *    link : { href : '/posts',method : RestOptions.GET},
   * };
   * this.service.request<Post>(option).subscribe();
   */
  request<T>(options: RestOptions): Observable<T> {
    this.validateInput(options);
    // concatenate the incoming url with the base url
    options.link.href = environment.baseUrl + this.updateUrlProperties(options.link.href, options.properties);
    return this.fireRequest<T>(options);
  }

  /**
   * Method to validate whether the options provided has a valid link
   * @param options instance of {@link RestOptions}
   * @throws Error when the options do not have link or href inside link
   */
  private validateInput(options: RestOptions) {
    if (!options || !options.link || !options.link.href) {
      throw new Error('Link is NULL');
    }
  }

  /**
   * Method to update the url with properties
   * @param url - url string with placeholders eg. http://xxx.com/abc/{id}?name={name}
   * @param properties - key value pair for the placeholders eg. { id : 2, name :'test'}
   * @returns udated url. eg. http://xxx.com/abc/2?name=test
   */
  private updateUrlProperties(url: string, properties: { [key: string]: any }) {
    // get url without query params
    let splitUrl = url.split('?')[0];
    // replace the placeholders
    splitUrl = this.replace(splitUrl, properties);

    // get query params part
    let queryParams = url.split('?')[1] || '';
    // replace the placeholders
    queryParams = this.replace(queryParams, properties).replace(/[^=&]+=(&|$)/g, '').replace(/&$/, '');

    // combine to form final url
    if (!!queryParams) {
      return `${splitUrl}?${queryParams}`;
    }
    return splitUrl;
  }


  /**
   * RegEx to replace placeholders
   * @param template - string with placeholders
   * @param properties  - key value pair to be replaced in template
   * Place holder should be wrapped with {}. eg. http://some.com/posts/{postId}
   * Here postId will be place holder. Then this method looks for the postId attribute
   * in properties object. If it is present, it replaces the place holder witih the
   * value from properties object using the javsacript replace with RegEx
   */
  private replace(template: string, properties: { [key: string]: any }): string {
    return template.replace(/{[^{}]+}/g, key => {
      return properties[key.replace(/[{}]+/g, '')] == null ? '' : properties[key.replace(/[{}]+/g, '')];
    });
  }

  /**
   * Method that fires HTTP call
   * @param options instance of {@link RestOptions}
   */
  private fireRequest<T>(options: RestOptions): Observable<T> {

    // If the Rest options has a loader name, increment the loader
    if (options.loaderNames) {
      this.loaderService.loaders[options.loaderNames]++;
    }

    // Fire Http request using Angular's HttpClient request method
    return this.http.request<T>(
      options.link.method,
      options.link.href, {
      body: options.requestBody
    }).pipe(

      // If there are any error, toast the error using angular2-toaster
      catchError(error => {
        this.toaster.pop('error', 'Http Error', error ? error.message : '');
        return throwError(error);
      }),

      // loader should be decremented in both success/error scenario. So this code goes into finalize method
      finalize(() => {
        if (options.loaderNames) {
          this.loaderService.loaders[options.loaderNames]--;
        }
      }));
  }
}
