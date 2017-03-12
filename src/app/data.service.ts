import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Item } from './item';

@Injectable()

export class DataService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getMessage(): Promise<string> {
    return this.http.get('/api/message')
      .toPromise()
      .then(response =>  {
        return response.json().data;
      })
      .catch(this.handleError);
  }

  getItemsList(): Promise<Item[]> {
    return this.http.get('/api/items')
      .toPromise()
      .then(response =>  {
        return response.json().data;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
