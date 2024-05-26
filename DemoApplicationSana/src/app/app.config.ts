import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(
   routes
  ), provideClientHydration(),
    importProvidersFrom(RouterModule.forRoot(routes))
     ,provideAnimationsAsync(),],
};
