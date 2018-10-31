import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'group-dialog',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})

export class GroupDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public itemType: string) {}
}
