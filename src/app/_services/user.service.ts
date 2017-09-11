import { Hero } from './../home/hero';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {HttpCommonService}from './http-common.service'
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService,
    private httpCommon: HttpCommonService) {
    }

    private post_url : string = "http://demo9952451.mockable.io/postTest"

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/users', options)
            .map((response: Response) => response.json());
    }

        // postTest(hero : Hero):Observable<Hero> {
        //     let body = JSON.stringify(hero);
        // return this.http.post('http://demo9952451.mockable.io/postTest', body,this.httpCommon.options)
        //     .map(response => response.json())
        //     .catch(err => { throw err; });         
        // }
           postTest(hero: Hero): Observable<Hero> {
             let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
    return this.http.post('/api/postTest', options, this.httpCommon.options)
      .map(
          response => <any>response.json()
        )
      .catch(err => {throw err;})

  } 
}