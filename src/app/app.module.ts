import { ChildTwoComponent } from './user/childtwo.component';
import { ChildOneComponent } from './user/childone.component';
import { ParentComponent } from './user/parent.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';    
// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService,HttpCommonService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { StudentComponent } from './student/student.component';
import {StudentService} from './student/studentdata.service';
import { ImageComponent } from './image/image.component'
import { Ng2ImgToolsModule  } from 'ng2-img-tools'
import { Ng2FileInputModule } from 'ng2-file-input';
import { GraphComponent } from './graph/graph.component';
import { GraphService } from './graph/graph.service';
import { ChartsModule } from 'ng2-charts';
// import {ParentComponent,ChildOneComponent,ChildTwoComponent} from './user'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        Ng2FileInputModule.forRoot(), 
        Ng2ImgToolsModule,
        ChartsModule
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
        ChildTwoComponent
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
        StudentService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }