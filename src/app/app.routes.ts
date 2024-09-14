import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MediaComponent } from './components/media/media.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/locate/locate.component';
import { KnowAboutComponent } from './components/know-about/know-about.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'media', component: MediaComponent },
    { path: 'programs', component: ProgramsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'know-about/:about', component: KnowAboutComponent },
    { path: '**', component: NotFoundComponent }
];
