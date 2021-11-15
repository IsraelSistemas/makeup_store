import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { StockComponent } from './stock/stock.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ReportsComponent } from './reports/reports.component';
import { AdministrationComponent } from './administration/administration.component';
import { GeneralComponent } from './general/general.component';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    UsersComponent,
    StockComponent,
    VendorsComponent,
    ReportsComponent,
    AdministrationComponent,
    GeneralComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
