import { Injectable } from '@angular/core';
import { colorentiry } from '../Entity/colorentity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
      'https://mocki.io/v1/a9c7d25f-6544-4896-b25b-a69156c508ce'
    );
  }
}
