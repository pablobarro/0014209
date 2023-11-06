import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphQlComponent } from './graph-ql.component';

const routes: Routes = [{ path: '', component: GraphQlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphQlRoutingModule { }
