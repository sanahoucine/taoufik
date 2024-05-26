import { Routes } from '@angular/router';
import HomeComponent from './Home/home.component';

import BlogsComponent from './Blogs/blogs.component';
import AboutComponent from './About/about.component';
import ContactComponent from './Contact/contact.component';
import ProjectsComponent from './Projects/projects.component';


export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'blogs', component:BlogsComponent },
    { path: 'about', component:AboutComponent },
    { path: 'projects', component:ProjectsComponent },
    { path: 'contact', component:ContactComponent },
    { path: '**', redirectTo: 'Home' },
];
