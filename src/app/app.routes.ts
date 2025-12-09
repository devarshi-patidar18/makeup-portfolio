import { Routes } from '@angular/router';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { InquiryComponent } from './pages/inquiry/inquiry.component';


export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'services', component: ServicesComponent },
{ path: 'artists', component: ArtistsComponent },
{ path: 'inquiry', component: InquiryComponent },
{ path: '**', redirectTo: '' },
];


export const appRouterProviders = [provideRouter(routes, withEnabledBlockingInitialNavigation())];