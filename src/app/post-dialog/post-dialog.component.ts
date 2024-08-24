import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MasterService } from '../service/master.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.css'],
})
export class PostDialogComponent {
  postform!: FormGroup;

  genders: string[] = ['male', 'female', 'other'];

  constructor(
    private service: MasterService,
    public dialogRef: MatDialogRef<PostDialogComponent>
  ) {}

  ngOnInit() {
    this.postform = new FormGroup({
      first_name: new FormControl(null),
      last_name: new FormControl(null),
      emailId: new FormControl(null),
      age: new FormControl(45),
      gender: new FormControl(null),
      mobilenumber: new FormControl(9876543210),
      adhaar_no: new FormControl(1122334455),
      pan_no: new FormControl(9898761),
    });
  }

  postSaved() {
    // this.service.savePost(this.postform.value).subscribe();
    // this.dialogRef.close();
  }

  // postSelected(id: any) {
  //   this.service.getPostById(id).subscribe();
  // }
}
