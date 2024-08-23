import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface Country {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.css'],
})
export class FormDesignComponent implements OnInit {
  // forms!: FormGroup;

  countries: Country[] = [
    { value: 'ind', viewValue: 'India' },
    { value: 'usa', viewValue: 'USA' },
    { value: 'rsa', viewValue: 'Russia' },
  ];

  options: string[] = ['One', 'Two', 'Three'];

  favoriteSeason!: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  // ngOnInit() {
  //   this.forms = new FormGroup({
  //     fistname: new FormControl(null, Validators.required),
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //     phone: new FormControl(null),
  //     country: new FormControl(null),
  //     term: new FormControl(null),
  //     address: new FormControl(null),
  //     season: new FormControl(null),
  //   });
  // }

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.forms.patchValue({
      phone: '9878766767',
    });
  }

  forms = this.builder.group({
    firstname: this.builder.control('', Validators.required),
    email: this.builder.control('', [(Validators.required, Validators.email)]),
    phone: this.builder.control(''),
    country: this.builder.control(''),
    term: this.builder.control(''),
    address: this.builder.control(''),
    season: this.builder.control('Winter'),
    dob: this.builder.control(new Date()),
    checked: this.builder.control(''),
    inter: this.builder.control(true),
  });

  formSaved() {
    console.log(this.forms);
    this.clearForm();
  }
  clearForm() {
    this.forms.reset();
  }
}
