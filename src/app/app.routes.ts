import { Routes } from '@angular/router';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { DashboardComponent } from './dashboard/index';


export const routes: Routes = [
    ...DashboardRoutes,
    { path: '**', component: DashboardComponent }
];
