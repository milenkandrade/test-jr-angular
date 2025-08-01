import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { breedReducer } from './store/breed.reducer';
import { provideEffects } from '@ngrx/effects';
import { BreedsEffects } from './store/breeds.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideStore(),
    provideState({name: 'breeds', reducer: breedReducer}),
    provideEffects(BreedsEffects),
    provideHttpClient(),
  ]
};
