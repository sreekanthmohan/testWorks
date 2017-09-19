import { ParentComponent } from './user/parent.component';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import {StudentComponent} from './student/student.component';
import {ImageComponent} from './image/image.component'
import {GraphComponent} from './graph/graph.component'
import {InputComponent} from './input/input.component'
import {IoTestComponent} from './io-test/io-test.component'


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {path : 'student', component : StudentComponent,canActivate: [AuthGuard],data: { roles: ['super-admin', 'admin'] }},    
    {path : 'image', component : ImageComponent,canActivate: [AuthGuard],data: { roles: ['super-admin', 'admin'] }},        
    {path : 'graph', component : GraphComponent,canActivate: [AuthGuard],data: { roles: ['super-admin', 'admin'] }},          
    {path : 'input', component : ParentComponent,canActivate: [AuthGuard],data: { roles: ['super-admin', 'admin'] }},

    { path: 'home', component: HomeComponent, canActivate: [AuthGuard],data: { roles: ['super-admin', 'admin'] } },
    
    { path: 'output', component: InputComponent, canActivate: [AuthGuard],data: { roles: ['super-admin', 'admin'] } },
    
    { path: 'ioTest', component: IoTestComponent, canActivate: [AuthGuard],data: { roles: ['super-admin', 'admin'] } },

    // otherwise redirect to home    
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);