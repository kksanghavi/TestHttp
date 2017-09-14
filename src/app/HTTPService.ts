/**
 * Created by kaushals on 9/12/2017.
 */

import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class HTTPService {
  private url: string;
  constructor (
    private http: Http
  ) {
    //this.url = 'http://localhost:4200/data/testHTTP.txt';
    this.url = 'http://localhost/testHTTP.txt';
  }

  ExecuteRequest()
  {
    this.http.get(this.url)
      .map(res => res.text())
      .subscribe(x => alert(x), e => this.handleError(e));
  }

  private handleError (error: Response | any) {
    //alert('handleError');
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}


