import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'listing/:id',
    loadChildren: () =>
      import('./pages/listing-detail/listing-detail.module').then(
        (m) => m.ListingDetailModule
      ),
  },
  {
    path: 'user/:id',
    loadChildren: () =>
      import('./pages/user-detail/user-detail.module').then(
        (m) => m.UserDetailModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
