import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../admin.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { User } from '../../../../models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  constructor(private http: HttpService) {}
  private dataSource: MatTableDataSource < User > ;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.http.getUsers()
        .subscribe(users => {
            this.dataSource = new MatTableDataSource(users);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
  }
}
