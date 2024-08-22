import { Injectable } from '@angular/core';
import { colorentiry } from '../Entity/colorentity';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  GetColorList(): colorentiry[] {
    return [
      { code: 'c1', name: 'Red' },
      { code: 'c2', name: 'Green' },
      { code: 'c3', name: 'Yellow' },
      { code: 'c4', name: 'Black' },
    ];
  }

  GetCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      'https://mocki.io/v1/3deb245f-f358-4c8e-a54f-5b28214a3459'
    );
  }
}

////----------below with customer:
// 'https://mocki.io/v1/fc80d03e-4653-4c5f-b368-14d378f0bc4e';
