import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.css'],
})
export class FormDesignComponent {
  forms!: FormGroup;

  countries: Country[] = [
    { value: 'ind', viewValue: 'India' },
    { value: 'usa', viewValue: 'USA' },
    { value: 'rsa', viewValue: 'Russia' },
  ];

  options: string[] = ['One', 'Two', 'Three'];

  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  ngOnInit() {
    this.forms = new FormGroup({
      fistname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null),
      country: new FormControl(null),
      term: new FormControl(null),
      address: new FormControl(null),
      season: new FormControl(null),
    });
  }

  formSaved() {
    console.log(this.forms);
  }
}
