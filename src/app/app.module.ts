import { ChildTwoComponent } from './user/childtwo.component';
import { ChildOneComponent } from './user/childone.component';
import { ParentComponent } from './user/parent.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService, HttpCommonService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student/studentdata.service';
import { ImageComponent } from './image/image.component'
import { Ng2ImgToolsModule } from 'ng2-img-tools'
import { Ng2FileInputModule } from 'ng2-file-input';
import { GraphComponent } from './graph/graph.component';
import { GraphService } from './graph/graph.service';
import { ChartsModule } from 'ng2-charts';
import { ModalModule } from 'ngx-bootstrap';
import { ConfirmModule } from 'angular2-bootstrap-confirm';
import { ChartModule } from 'angular2-highcharts';
import { CustomCounterComponent } from './graph/custom-counter.component';
import { InputComponent } from './input/input.component'
import { child1Component } from './input/child1.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExploreRendererDirective } from './input/explore-renderer.directive';
import { SimpleTimer } from 'ng2-simple-timer';
import { RedDirective } from './input/read.directive';
import { IoTestComponent } from './io-test/io-test.component';
import { Child1Component } from './io-test/child1/child1.component'


// import {}
// import {ParentComponent,ChildOneComponent,ChildTwoComponent} from './user'
declare var require: any;


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        BrowserAnimationsModule,
        Ng2FileInputModule.forRoot(),
        Ng2ImgToolsModule,
        ChartsModule,
        ModalModule.forRoot(),
        ChartModule.forRoot(
            require('highcharts/highstock'),
            require('highcharts/modules/exporting')
        ),
        ConfirmModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        StudentComponent,
        ImageComponent,
        GraphComponent,
        ParentComponent,
        ChildOneComponent,
        ChildTwoComponent,
        CustomCounterComponent,
        InputComponent,
        child1Component,
        ExploreRendererDirective,
        RedDirective,
        IoTestComponent,
        Child1Component
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        GraphService,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        HttpCommonService,
        StudentService,
        SimpleTimer
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }