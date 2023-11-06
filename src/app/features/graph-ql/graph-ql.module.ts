import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphQlRoutingModule } from './graph-ql-routing.module';
import { GraphQlComponent } from './graph-ql.component';


@NgModule({
  declarations: [
    GraphQlComponent
  ],
  imports: [
    CommonModule,
    GraphQlRoutingModule
  ]
})
export class GraphQlModule { }
