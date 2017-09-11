import { graph } from './graph';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './../_services/authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class GraphService {

  constructor(private http: Http,  
        private authenticationService: AuthenticationService) { }

  getGraph():Observable<graph>{
      let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
  console.log("service called")
    return this.http.get('/api/graph', options)
    .map(
      resp => <any>resp.json(),
      console.log("data in service")
    )
    .catch (
      err => {throw err;}
    )

  }

}
