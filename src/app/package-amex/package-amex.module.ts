import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PackageAmexListComponent } from './package-amex-list/package-amex-list.component';
import { PackageAmexEditComponent } from './package-amex-edit/package-amex-edit.component';
import { PackageAmexService } from './package-amex.service';
import { PACKAGEAMEX_ROUTES } from './package-amex.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PACKAGEAMEX_ROUTES)
  ],
  declarations: [
    PackageAmexListComponent,
    PackageAmexEditComponent
  ],
  providers: [PackageAmexService],
  exports: []
})
export class PackageAmexModule { }
