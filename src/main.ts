/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ListComponent } from './app/presentation/pages/list/list.component';
import { ManufactureService } from './app/services/manufacture.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  template: `<app-list></app-list>`,
  providers: [ManufactureService],
})
export class MainComponent {}

bootstrapApplication(MainComponent, appConfig).catch((err) =>
  console.error(err)
);
