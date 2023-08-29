import { Component, OnInit } from '@angular/core';
import { PackageAmexFilter } from '../package-amex-filter';
import { PackageAmexService } from '../package-amex.service';
import { PackageAmex, PackageAmexClass } from '../package-amex';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Are you sure?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.packageAmexService.delete(packageAmex).subscribe({
          next: () => {
            Swal.fire('Delete!', '', 'success')
            this.search();
          },
          error: err => {
            Swal.fire('Error trying delete', '', 'info')
          }
        });
        
      }
    })
  }
}
