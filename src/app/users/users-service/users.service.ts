import { Injectable } from '@angular/core';
import { UsersServiceModule } from './users-service.module';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { RestOptions } from '../../rest/model/rest-options';
import { RestDataService } from '../../rest/service/rest-data.service';

@Injectable({
  providedIn: UsersServiceModule
})
export class UsersService {

  constructor(private dataService: RestDataService) { }


  /**
   * Method to get user by the user id
   * @param options  Instance of {@link RestOptions}
   * @returns Observable of {@link User}
   */
  getUserById(options: RestOptions): Observable<User> {
    return this.dataService.request<User>(options);
  }
}
