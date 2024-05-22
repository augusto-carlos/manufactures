import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DefaultResponse } from '../protocols/default-response.interface';
import { ManufactureModel } from '../models/manufacture.model';

@Injectable({
  providedIn: 'root',
})
export class ManufactureService {
  private readonly baseUrl = 'https://vpic.nhtsa.dot.gov/api/vehicles';

  constructor(private readonly http: HttpClient) {}

  getAllManufactures() {
    return this.http.get<DefaultResponse<ManufactureModel[]>>(
      `${this.baseUrl}/getallmanufacturers?format=json`
    );
  }

  getManufactureById(id: number) {
    return this.http.get<DefaultResponse<ManufactureModel[]>>(
      `${this.baseUrl}/getmanufacturerdetails/${id}?format=json`
    );
  }
}
