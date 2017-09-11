import { data } from './../_services/check';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {
    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        let testUser = { username: 'test', password: 'test', firstName: 'Test', lastName: 'User' };

        // wrap in timeout to simulate server api call
        setTimeout(() => {

            // fake authenticate api end point
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                let params = JSON.parse(connection.request.getBody());

                // check user credentials and return fake jwt token if valid
                if (params.username === testUser.username && params.password === testUser.password) {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: { token: 'fake-jwt-token',role : "admin" } })
                    ));
                } else {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200 })
                    ));
                }
            }

                 if (connection.request.url.endsWith('/api/postTest') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                let params = JSON.parse(connection.request.getBody());

                // check user credentials and return fake jwt token if valid
                // if (params.username === testUser.username && params.password === testUser.password) {
                    
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: { name: 'sree',alterEgo : "gayu", id :'10' } })
                    ));

                // } else {
                    // connection.mockRespond(new Response(
                    //     new ResponseOptions({ status: 400,body: { error : "error reported" } })
                    // ));
                // }
            }

                   if (connection.request.url.endsWith('/api/imagePost') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                let params = JSON.parse(connection.request.getBody());
                // console.log("params", params.student_img)
                let data = params.student_img
                // if(params)

                // check user credentials and return fake jwt token if valid
                // if (params.username === testUser.username && params.password === testUser.password) {
                    
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: { rno : "10", name : "sree", mobile_no : "9496785698", student_img : data } })
                    ));

                // } else {
                    // connection.mockRespond(new Response(
                    //     new ResponseOptions({ status: 400,body: { error : "error reported" } })
                    // ));
                // }
            }

                  if (connection.request.url.endsWith('/api/graph') && connection.request.method === RequestMethod.Get) {
                      console.log("api called")
                // get parameters from post request
                // let params = JSON.parse(connection.request.getBody());
                // console.log("params", params.student_img)
                // let data = params.student_img
                // if(params)

                // check user credentials and return fake jwt token if valid
                // if (params.username === testUser.username && params.password === testUser.password) {
                    
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: { 
                            "barChartLabels" : ["2010","2011","2012","2013","2014","2015","2016"],
 "barChartData" : [
    {"data": [65, 59, 80, 81, 56, 55, 60], "label": "series A"},
    {"data": [28, 48, 40, 19, 86, 27, 60], "label": "series B"}
  ]
                         } })
                    ));

                // } else {
                    // connection.mockRespond(new Response(
                    //     new ResponseOptions({ status: 400,body: { error : "error reported" } })
                    // ));
                // }
            }

            // fake users api end point
            if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return test users if valid, this security is implemented server side
                // in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: [testUser] })
                    ));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 401 })
                    ));
                }
            }

        }, 500);

    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};