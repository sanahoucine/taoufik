import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(
    [{ path: 'home',loadChildren: () => import('./app.routes').then(m => m.routes) },
    { path: 'mobtada',loadChildren: () => import('./app.routes').then(m => m.routes) },
    { path: '**', redirectTo: 'Home' },
    ]
  ), provideClientHydration(),
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
};
