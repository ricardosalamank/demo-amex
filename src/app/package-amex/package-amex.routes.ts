import { Routes } from '@angular/router';
import { PackageAmexListComponent } from './package-amex-list/package-amex-list.component';
import { PackageAmexEditComponent } from './package-amex-edit/package-amex-edit.component';

export const PACKAGEAMEX_ROUTES: Routes = [
  {
    path: 'packageAmexes',
    component: PackageAmexListComponent
  },
  {
    path: 'packageAmexes/:id',
    component: PackageAmexEditComponent
  }
];
