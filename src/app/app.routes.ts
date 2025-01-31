
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {
        path: "", redirectTo: "home", pathMatch: "full"
    },
    {
        path:"home", component: HomeComponent, title: "Home" 
    },
    {
        path:"details/:id", component: DetailsComponent, title: "Details"
    },
    // wildcard route for a 404 page
    { path: '**', component: NotfoundComponent, data: { title: '404' } }
];
