import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../admin.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Group } from '../../../../models/group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})

export class GroupsComponent implements OnInit {
  constructor(private http: HttpService) {}
  private dataSource: MatTableDataSource <Group> ;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
      this.http.getGroups()
          .subscribe(groups => {
              this.dataSource = new MatTableDataSource(groups);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
          });
  }
}
