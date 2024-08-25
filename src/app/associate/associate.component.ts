import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MasterService } from '../service/master.service';
import { colorentiry, countryEntry } from '../Entity/colorentity';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css'],
})
export class AssociateComponent implements OnInit {
  associateList: any;
  addressArray!: FormArray<any>;

  countryList!: countryEntry[];

  filterOptions!: Observable<countryEntry[]>;
  constructor(private builder: FormBuilder, private service: MasterService) {}

  ngOnInit(): void {
    this.loadAssociate();
    this.loadCountry();
  }

  myform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    address: this.builder.array([]),
  });

  saveAssociate() {
    // console.log(this.myform.value);
    this.service
      .SaveAssociate(this.myform.value, this.myform.value.id)
      .subscribe((item) => {
        alert('Address saved');
      });
  }

  loadAssociate() {
    this.service.GetAssociate().subscribe((item) => {
      this.associateList = item;
    });
  }

  loadCountry() {
    this.countryList = this.service.GetCountyList();
  }
  addAddress() {
    const associate = this.myform.value.id;
    console.log(this.myform.value.id);

    if (associate) {
      this.addressArray = this.myform.get('address') as FormArray;
      this.addressArray.push(this.createAddressRow());
    } else {
      alert(' Please choose one user');
    }
  }
  createAddressRow() {
    return this.builder.group({
      title: this.builder.control(''),
      country: this.builder.control(''),
      fulladdress: this.builder.control(''),
    });
  }

  get getAddress() {
    return this.myform.get('address') as FormArray;
  }

  autoChange(index: any) {
    this.addressArray = this.myform.get('address') as FormArray;
    const addObj = this.addressArray.at(index) as FormGroup;
    const _control = addObj.get('country') as FormControl;

    this.filterOptions = _control.valueChanges.pipe(
      startWith(''),
      map((value) => this._listFilter(_control.value || ''))
    );
  }

  private _listFilter(value: string): countryEntry[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.countryList.filter(
      (option) =>
        option.name.toLocaleLowerCase().includes(searchvalue) ||
        option.code.toLocaleLowerCase().includes(searchvalue)
    );
  }
}
