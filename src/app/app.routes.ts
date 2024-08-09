import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import { UserComponent} from './components/user/user.component';
import {PageErrorComponent} from './components/page-error/page-error.component';
import { DisplayUserDataComponent} from './components/display-user-data/display-user-data.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'user', component:UserComponent},
    {path:'display-user-data', component:DisplayUserDataComponent},
    // {path:'**', component:PageErrorComponent},

];
