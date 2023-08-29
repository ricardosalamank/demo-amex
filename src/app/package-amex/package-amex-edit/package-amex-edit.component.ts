import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PackageAmexService } from '../package-amex.service';
import { PackageAmex, PackageAmexClass } from '../package-amex';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-package-amex-edit',
  templateUrl: './package-amex-edit.component.html'
})
export class PackageAmexEditComponent implements OnInit {

  id!: string;
  packageAmex!: PackageAmexClass;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private packageAmexService: PackageAmexService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p['id']),
        switchMap(id => {
          if (id === 'new') { return of(new PackageAmexClass()); }
          return this.packageAmexService.findById(id);
        })
      )
      .subscribe({
        next: packageAmex => {
          this.packageAmex = packageAmex;
          this.feedback = {};
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      });
  }

  save() {
    this.packageAmexService.save(this.packageAmex).subscribe({
      next: packageAmex => {
        this.packageAmex = packageAmex;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(async () => {
          await this.router.navigate(['/packageAmexes']);
        }, 1000);
      },
      error: err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    });
  }

  async cancel() {
    await this.router.navigate(['/packageAmexes']);
  }
}
