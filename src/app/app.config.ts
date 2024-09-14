import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { ExtraOptions, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};

const extraOptions: ExtraOptions = {
  scrollPositionRestoration: 'top'
}