import { Injectable } from '@angular/core';
import { ContextService } from './context.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RandomUserMe } from '../models/user';

@Injectable()
export class UtentiService {
  private url = '';
  constructor(private context: ContextService,
              private http: HttpClient) {
    this.url = this.context.getUrlRandomUser();
  }

  getRandomMeUser(numberOfUsers: number): Observable<RandomUserMe> {
    return this.http.get<RandomUserMe>(`${this.url}?results=${numberOfUsers}`);
  }
}
