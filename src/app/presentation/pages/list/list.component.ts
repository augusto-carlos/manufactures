import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { Table, TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { finalize } from 'rxjs/operators';
import { ManufactureModel } from '../../../models/manufacture.model';
import { ManufactureService } from '../../../services/manufacture.service';
import { ManufactureCardComponent } from '../../components/manufacture-card/manufacture-card.component';
import { CommonModule } from '@angular/common';
import { DialogService } from 'primeng/dynamicdialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  imports: [
    HttpClientModule,
    ManufactureCardComponent,
    TableModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    ButtonModule,
    CommonModule,
    SidebarModule,
    DialogModule,
  ],
  providers: [DialogService],
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  manufactures: ManufactureModel[] = [];
  originalData: ManufactureModel[] = [];
  selectedManufacture: ManufactureModel | null = null;
  isLoading = false;
  searchValue: string | undefined;

  constructor(
    private readonly manufactureService: ManufactureService,
    private readonly modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getManufactures();
  }

  private getManufactures() {
    this.isLoading = true;

    this.manufactureService
      .getAllManufactures()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (data) => {
          this.manufactures = data?.Results;
          this.originalData = data?.Results;
        },
        error: (error) => {
          console.log({ error });
        },
      });
  }

  filterByName(event: any) {
    const value = event;

    const filteredManufactures = this.originalData.filter((el) => {
      return (
        el.Mfr_CommonName?.toLowerCase()?.includes(value?.toLowerCase()) ||
        el.Mfr_Name?.toLowerCase()?.includes(value?.toLowerCase())
      );
    });

    this.manufactures = filteredManufactures;
  }

  openModal(manufacture: ManufactureModel) {
    const modalInstance = this.modalService.open(ManufactureCardComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
    });

    modalInstance.componentInstance.manufacture = manufacture;
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }
}
