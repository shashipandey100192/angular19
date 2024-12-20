import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServerComponent } from './server/server.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

export const routes: Routes = [
    {
        path:'',
        component:AboutComponent
    },
    {
        path:'service',
        component:ServerComponent
    },
    {
        path:"contactus",
        component:ContactusComponent
    },
    {
        path:"**",
        component:ErrorpageComponent
    }
];
