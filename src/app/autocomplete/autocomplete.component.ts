import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
  colorarray = ['Red', 'Green', 'Yellow'];
  filteroption!: Observable<string[]>;
  formControl = new FormControl('');

  ngOnInit(): void {
    this.filteroption = this.formControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const searchvalue = value.toLocaleLowerCase();
    return this.colorarray.filter((option) =>
      option.toLocaleLowerCase().includes(searchvalue)
    );
  }
}
