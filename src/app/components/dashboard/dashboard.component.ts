import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SideMenu } from 'src/app/interfaces/sidemenu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild("drawer") drawer!: MatDrawer;

  selectedMenu: string = '';
  sidemenu: SideMenu[] = [{
    id: 1,
    displayName: 'Inicio',
    name: 'home',
    icon: 'dashboard',
    redirectTo: '/dashboard'
  }, {
    id: 2,
    displayName: 'Inventario',
    name: 'stock',
    icon: 'inventory',
    redirectTo: '/dashboard/stock'
  }, {
    id: 3,
    displayName: 'Reportes',
    name: 'reports',
    icon: 'description',
    redirectTo: '/dashboard/reports'
  }, {
    id: 4,
    displayName: 'Administración',
    name: 'users',
    icon: 'admin_panel_settings',
    redirectTo: '/dashboard/admin'
  }];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedMenu = this.router.url.replace('/dashboard/', '');

    if (this.selectedMenu == '/dashboard') this.selectedMenu = 'home';
  }

  logout() {
    this.router.navigate(['/login']);
  }

  openSideNav() {
    this.drawer.toggle();
  }

  goToMenu(menu: SideMenu) {
    this.selectedMenu = menu.name;
    this.router.navigate([menu.redirectTo]);
  }

}
