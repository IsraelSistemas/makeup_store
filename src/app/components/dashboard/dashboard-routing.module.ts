import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { DashboardComponent } from './dashboard.component';
import { GeneralComponent } from './general/general.component';
import { ReportsComponent } from './reports/reports.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: GeneralComponent
      },
      {
        path: 'stock',
        component: StockComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'admin',
        component: AdministrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
