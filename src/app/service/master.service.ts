import { Injectable } from '@angular/core';
import { colorentiry } from '../Entity/colorentity';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Customer } from '../Model/Customer';
import { Contact } from '../Model/Posts';

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

  code!: Number;

  GetCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      'https://mocki.io/v1/3deb245f-f358-4c8e-a54f-5b28214a3459'
    );
  }

  SaveCustomer(body: Customer) {
    return this.http.post(
      'https://mocki.io/v1/3deb245f-f358-4c8e-a54f-5b28214a3459',
      body
    );
  }

  GetCustomerbyId(code: any) {
    return this.http.get(
      'https://mocki.io/v1/3deb245f-f358-4c8e-a54f-5b28214a3459' + code
    );
  }

  // getPosts(): Observable<Contact[]> {
  //   // return this.http.get<Contact[]>(
  //   //   'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile'
  //   // );
  // }

  savePost(body: any) {
    // return this.http.post(
    //   'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile',
    //   body
    // );
  }

  getPostById(id: any) {
    // return this.http.get(
    //   'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile' + id
    // );
  }
}

////----------below with customer:
// 'https://mocki.io/v1/fc80d03e-4653-4c5f-b368-14d378f0bc4e';
