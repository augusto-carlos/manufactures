import { ManufactureModel } from './../../../models/manufacture.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ManufactureService } from '../../../services/manufacture.service';
import { DialogService } from 'primeng/dynamicdialog';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-manufacture-card',
  standalone: true,
  imports: [CommonModule, ButtonModule, TagModule, HttpClientModule],
  templateUrl: './manufacture-card.component.html',
  styleUrl: './manufacture-card.component.scss',
  providers: [ManufactureService],
})
export class ManufactureCardComponent implements OnInit {
  constructor(
    private readonly manufactureService: ManufactureService,
    private readonly activeModal: NgbActiveModal
  ) {}

  manufacture: ManufactureModel | null = null;

  closeModal() {
    this.activeModal.close();
  }

  ngOnInit(): void {
    this.manufactureService
      .getManufactureById(this.manufacture?.Mfr_ID!)
      .subscribe({
        next: (data) => {
          this.manufacture = data?.Results[0];
        },
        error: (error) => {
          console.log({ error });
        },
      });
  }
}
