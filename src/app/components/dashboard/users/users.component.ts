import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {

  users: Users[] = [{
    id: 1,
    name: 'fer',
    age: 28,
    gender: 'hombre'
  }, {
    id: 2,
    name: 'oscar',
    age: 28,
    gender: 'hombre'
  }, {
    id: 3,
    name: 'pedro',
    age: 28,
    gender: 'hombre'
  }, {
    id: 4,
    name: 'abi',
    age: 22,
    gender: 'mujer'
  }, {
    id: 5,
    name: 'israel',
    age: 28,
    gender: 'hombre'
  }, {
    id: 6,
    name: 'jaime',
    age: 28,
    gender: 'hombre'
  }]
  displayedColumns: string[] = ['id', 'name', 'age', 'gender'];
  dataSource = new MatTableDataSource<Users>(this.users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
