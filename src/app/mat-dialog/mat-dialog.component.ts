import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MasterService } from '../service/master.service';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.css'],
})
export class MatDialogComponent implements OnInit {
  userForm!: FormGroup;

  code!: Number;

  inputData: any;
  editData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private master: MasterService,
    private ref: MatDialogRef<MatDialogComponent>
  ) {}

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(null),
      phone: new FormControl(null),
      email: new FormControl(null),
      status: new FormControl(true),
    });

    this.inputData = this.data;
    if (this.inputData.code > 0) {
      this.displayById(this.inputData.code);
    }
  }

  formSaved() {
    this.master.SaveCustomer(this.userForm.value).subscribe();
    console.log(this.userForm.value);
  }
  closePopUp() {
    this.ref.close();
  }

  displayById(code: any) {
    this.master.GetCustomerbyId(code).subscribe((item) => {
      this.editData = item;
      console.log(this.editData);
      this.userForm.patchValue(this.editData);
    });
  }
}
