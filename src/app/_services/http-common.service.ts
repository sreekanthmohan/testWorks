import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HttpCommonService {

  public headers = new Headers({ 'Content-Type': 'application/json' });
  public options = new RequestOptions({ headers: this.headers });

  constructor() { }

  extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  handleError (error: Response | any) {
    console.debug('in handleError with err:', error);
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
