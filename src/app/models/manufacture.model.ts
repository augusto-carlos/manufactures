import { VehicleTypeModel } from './vehicle-type.model';

export interface ManufactureModel {
  Country: string;
  Mfr_CommonName?: string;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: VehicleTypeModel[];

  Address?: string;
  Address2?: string;
  City?: string;
  ContactEmail?: null;
  ContactFax?: null;
  ContactPhone?: null;
  DBAs?: null;
  EquipmentItems: [];
  LastUpdated?: string;
  ManufacturerTypes: [];
  OtherManufacturerDetails?: null;
  PostalCode?: string;
  PrimaryProduct?: null;
  PrincipalFirstName?: null;
  PrincipalLastName?: null;
  PrincipalPosition?: null;
  StateProvince?: string;
  SubmittedName?: null;
  SubmittedOn?: null;
  SubmittedPosition?: null;
}
