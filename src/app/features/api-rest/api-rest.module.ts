import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRestRoutingModule } from './api-rest-routing.module';
import { ApiRestComponent } from './api-rest.component';


@NgModule({
  declarations: [
    ApiRestComponent
  ],
  imports: [
    CommonModule,
    ApiRestRoutingModule
  ]
})
export class ApiRestModule { }
