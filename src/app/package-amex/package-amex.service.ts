import { PackageAmex, PackageAmexClass } from './package-amex';
import { PackageAmexFilter } from './package-amex-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class PackageAmexService {
  packageAmexList: PackageAmexClass[] = [];
  api = 'https://american-export-crud-dk7m-dev.fl0.io/api/package';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<PackageAmexClass> {
    const url = `${this.api}/id/${id}`;
   // const params = { id: id };
    return this.http.get<PackageAmexClass>(url, { headers});
  }

  load(filter: PackageAmexFilter): void {
    this.find(filter).subscribe({
      next: result => {
        this.packageAmexList = result.response_body.data;
      },
      error: err => {
        console.error('error loading', err);
      }
    });
  }

  find(filter: PackageAmexFilter): Observable<PackageAmex> {
    const params = {
    };

    return this.http.get<PackageAmex>(this.api, {params, headers});
  }

  save(entity: PackageAmexClass): Observable<PackageAmexClass> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/update`;
     // params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<PackageAmexClass>(url, entity, {headers});
    } else {
      url = `${this.api}`;
      console.log("llego post :" + entity);
      entity.id = 0;
      entity.created_date = new Date();
      entity.modified_date = new Date();
      entity.created_by = "RIC";
      entity.modified_by = "Golasas"
      entity.height = "50";
      return this.http.post<PackageAmexClass>(url, entity, {headers, params});
    }
  }

  delete(entity: PackageAmexClass): Observable<PackageAmexClass> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/del/${entity.id.toString()}`;
     // params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<PackageAmexClass>(url, {headers});
    }
    return EMPTY;
  }
}

