import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'graphs', loadChildren: () => import('./features/graph-ql/graph-ql.module').then(m => m.GraphQlModule)
  },
  {
    path: 'api-rest', loadChildren: () => import('./features/api-rest/api-rest.module').then(m => m.ApiRestModule)
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
