import { AuthenticationService } from './../_services/authentication.service';
import { Student } from './student';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class StudentService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) { }

        addStudent(model : Student):Observable<Student> {
            let body = JSON.stringify(model)
            console.log("model",model)
            // localStorage.setItem('image', model.student_img)
            let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/api/imagePost',body,options)
            .map(
                resp => <any>resp.json() 
            )
            .catch(err => {throw err;})            
            
        }



}