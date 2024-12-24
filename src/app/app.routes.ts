import { Routes } from '@angular/router';

export const routes: Routes = [
{
   path:"",
   redirectTo:"auth",
   pathMatch:"full",
   loadComponent: ()=> import('./modules/auth/auth.module').then(m =>m.AuthModule)

}

];
