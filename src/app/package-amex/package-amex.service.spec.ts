import { TestBed } from '@angular/core/testing';
import { PackageAmexService } from './package-amex.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PackageAmexService', () => {
  let service: PackageAmexService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PackageAmexService]
    });

    service = TestBed.get(PackageAmexService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
