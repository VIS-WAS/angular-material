import { Component, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../service/master.service';
import { Customer } from '../Model/Customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  code: number;
  name: string;
  phone: string;
  email: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    code: 1,
    name: 'Hydrogen',
    phone: '898765375',
    email: 'vishwas@gmal.com',
    status: 'Active',
  },
  {
    code: 2,
    name: 'Helium',
    phone: '898765375',
    email: 'vishwas@gmal.com',
    status: 'Active',
  },
  {
    code: 3,
    name: 'Lithium',
    phone: '898765375',
    email: 'vishwas@gmal.com',
    status: 'Active',
  },
  {
    code: 4,
    name: 'Beryllium',
    phone: '8987653',
    email: 'vishwas@gmal.com',
    status: 'Active',
  },
  {
    code: 5,
    name: 'Boron',
    phone: '898765375',
    email: 'vishwas@gmal.com',
    status: 'Active',
  },
  {
    code: 6,
    name: 'Carbon',
    phone: '898765375',
    email: 'vishwas@gmal.com',
    status: 'Active',
  },
  {
    code: 7,
    name: 'Nitrogen',
    phone: '89876537',
    email: 'vishwas@gmal.com',
    status: 'Active',
  },
  {
    code: 8,
    name: 'Oxygen',
    phone: '898765375',
    email: 'vishwas@gmal.com',
    status: 'Active',
  },
  {
    code: 9,
    name: 'Fluorine',
    phone: '89876539',
    email: 'vishwas@gmal.com',
    status: 'Active',
  },
  {
    code: 10,
    name: 'Neon',
    phone: '089876537',
    email: 'vishwas@gmal.com',
    status: 'Active',
  },
];

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css'],
})
export class MatTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  customerList!: Customer[];
  dataSource: any;
  displayedColumns: string[] = [
    'code',
    'name',
    'phone',
    'email',
    'status',
    'action',
  ];

  constructor(private service: MasterService) {}

  ngOnInit() {
    this.service.GetCustomer().subscribe((cust) => {
      this.dataSource = new MatTableDataSource<Customer>(cust);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    // this.dataSource.filter = data.target.value;  // ------ take data as argument of type any
    // console.log(this.dataSource);

    this.dataSource.filter = value;
  }
}
