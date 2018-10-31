import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { CrudComponent } from './components/crud/crud.component';
import { UsersComponent } from './components/users/users.component';
import { GroupsComponent } from './components/groups/groups.component';
import { UsersDialogComponent } from './components/dialog/users/users.component';
import { GroupDialogComponent } from './components/dialog/group/group.component';
import { FormsModule }   from '@angular/forms';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, children: [
  { path: 'users', component: UsersComponent },
  { path: 'groups', component: GroupsComponent }
]}];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(adminRoutes),
    FormsModule
  ],
  declarations: [
    AdminComponent,
    CrudComponent,
    UsersComponent,
    GroupsComponent,
    UsersDialogComponent,
    GroupDialogComponent
  ],
  exports: [
    AdminComponent
  ],
  entryComponents: [
    UsersDialogComponent,
    GroupDialogComponent
  ]
})
export class AdminModule { }