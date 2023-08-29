import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PackageAmexEditComponent } from './package-amex-edit.component';
import { PackageAmexService } from '../package-amex.service';

describe('PackageAmexEditComponent', () => {
  let component: PackageAmexEditComponent;
  let fixture: ComponentFixture<PackageAmexEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PackageAmexEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [PackageAmexService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageAmexEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
