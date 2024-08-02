import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MasterService } from '../service/master.service';
import { colorentiry } from '../Entity/colorentity';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
  colorarray = ['Red', 'Green', 'Yellow'];
  filteroption!: Observable<string[]>;
  formControl = new FormControl('');

  colorArrayList!: colorentiry[];
  filteroptionList!: Observable<colorentiry[]>;

  constructor(private service: MasterService) {
    this.colorArrayList = this.service.GetColorList();
  }

  ngOnInit(): void {
    // this.filteroption = this.formControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value || ''))
    // );

    this.filteroptionList = this.formControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._listFilter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorarray.filter((option) =>
      option.toLocaleLowerCase().includes(searchvalue)
    );
  }

  private _listFilter(value: string): colorentiry[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorArrayList.filter(
      (option) =>
        option.name.toLocaleLowerCase().includes(searchvalue) ||
        option.code.toLocaleLowerCase().includes(searchvalue)
    );
  }
}
