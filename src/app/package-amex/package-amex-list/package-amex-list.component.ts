import { Component, OnInit } from '@angular/core';
import { PackageAmexFilter } from '../package-amex-filter';
import { PackageAmexService } from '../package-amex.service';
import { PackageAmex, PackageAmexClass } from '../package-amex';

@Component({
  selector: 'app-package-amex',
  templateUrl: 'package-amex-list.component.html'
})
export class PackageAmexListComponent implements OnInit {

  filter = new PackageAmexFilter();
  selectedPackageAmex!: PackageAmexClass;
  feedback: any = {};

  get packageAmexList(): PackageAmexClass[] {
    return this.packageAmexService.packageAmexList;
  }

  constructor(private packageAmexService: PackageAmexService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.packageAmexService.load(this.filter);
  }

  select(selected: PackageAmexClass): void {
    this.selectedPackageAmex = selected;
  }

  delete(packageAmex: PackageAmexClass): void {
    if (confirm('Are you sure?')) {
      this.packageAmexService.delete(packageAmex).subscribe({
        next: () => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        error: err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      });
    }
  }
}
