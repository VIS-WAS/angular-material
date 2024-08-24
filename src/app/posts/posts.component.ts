import { Component, OnInit, ViewChild } from '@angular/core';
import { MasterService } from '../service/master.service';
import { MatPaginator } from '@angular/material/paginator';
import { Customer } from '../Model/Customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource: any;
  displayedColumns: string[] = [
    'code',
    'name',
    'phone',
    'email',
    'status',
    'action',
  ];

  constructor(private postSer: MasterService, public dialog: MatDialog) {}

  ngOnInit() {
    this.postSer.GetCustomer().subscribe((cust) => {
      this.dataSource = new MatTableDataSource<Customer>(cust);

      this.dataSource.paginator = this.paginator;
    });
  }

  addUser() {
    this.openPopUp(0, 'Add user');
  }

  editCustomer(code: any) {
    this.openPopUp(code, 'Edit user');
  }

  openPopUp(code: any, title: any) {
    this.dialog.open(MatDialogComponent, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title,
      },
    });
  }
  // displayedColumns: string[] = [
  //   'createdAt',
  //   'first_name',
  //   'last_name',
  //   'emailId',
  //   'age',
  //   'gender',
  //   'mobilenumber',
  //   'adhaar_no',
  //   'pan_no',
  //   'id',
  // ];

  // posts: any;

  // ngAfterViewChecked() {
  //   this.getPostDetails();
  // }

  // getPostDetails() {
  //   this.postSer.getPosts().subscribe((res) => {
  //     this.posts = new MatTableDataSource<Contact>(res);
  //     this.posts.paginator = this.paginator;
  //   });
  // }

  // addPost() {
  //   // var _popup = this.dialog.open(PostDialogComponent, {
  //   //   width: '40%  ',
  //   // });
  //   // _popup.afterClosed().subscribe((item) => {
  //   //   this.getPostDetails();
  //   // });
  // }
}
