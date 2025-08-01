import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'breeds',
    loadComponent: () =>
      import('./pages/breeds/breeds.component')
  },
  {
    path: '**',
    redirectTo: 'breeds'
  }
];
