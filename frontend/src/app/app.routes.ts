import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'items',
      loadChildren: () => import('./pages/items/items.module').then(x => x.ItemsModule   )
    },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: '**', redirectTo: '/items', pathMatch: 'full' },
  ];