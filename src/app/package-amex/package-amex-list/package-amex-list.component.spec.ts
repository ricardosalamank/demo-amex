import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PackageAmexListComponent } from './package-amex-list.component';
import { PackageAmexService } from '../package-amex.service';

describe('PackageAmexListComponent', () => {
  let component: PackageAmexListComponent;
  let fixture: ComponentFixture<PackageAmexListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackageAmexListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PackageAmexService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageAmexListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
