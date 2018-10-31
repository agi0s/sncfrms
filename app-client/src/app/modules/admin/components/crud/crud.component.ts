import { Component, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GroupDialogComponent } from '../dialog/group/group.component';
import { UsersDialogComponent } from '../dialog/users/users.component';
import { HttpService } from '../../admin.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {

  constructor(public dialog: MatDialog, private http: HttpService) {}
 
  addGroup() {
    const dialogRef = this.dialog.open(GroupDialogComponent);

    dialogRef
      .afterClosed()
      .subscribe(data => {
        if(data) { 
          this.http.addGroup(data)
            .subscribe(data=>console.log(data));
          }
      });
  }

  addUser() {
    const dialogRef = this.dialog.open(UsersDialogComponent);

    dialogRef
      .afterClosed()
      .subscribe(data => {
        if(data) {
          this.http.addUser(data);
        }
      });
  }
  
}
