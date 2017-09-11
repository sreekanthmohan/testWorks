import { ParentComponent } from './user/parent.component';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';
import {StudentComponent} from './student/student.component';
import {ImageComponent} from './image/image.component'
import {GraphComponent} from './graph/graph.component'


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {path : 'student', component : StudentComponent},    
    {path : 'image', component : ImageComponent},        
    {path : 'graph', component : GraphComponent},          
    {path : 'input', component : ParentComponent},
    { path: '', component: HomeComponent, canActivate: [AuthGuard],data: { roles: ['super-admin', 'admin'] } },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);