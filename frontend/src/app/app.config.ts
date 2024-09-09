import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { ItemsEffects } from './core/store/items/items.effects';
import { itemsReducer } from './core/store/items/items.reducer';
import { provideRouterStore } from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideStore({ items: itemsReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(), actionsBlocklist:['@ngrx/router-store'] }),
    provideEffects(ItemsEffects),
    provideRouterStore()
]
};
