import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManufactureCardComponent } from './manufacture-card.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ManufactureCardComponent', () => {
  let component: ManufactureCardComponent;
  let fixture: ComponentFixture<ManufactureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufactureCardComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ManufactureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
