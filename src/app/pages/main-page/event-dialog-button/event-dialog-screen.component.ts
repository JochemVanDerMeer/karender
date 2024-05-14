import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RaceDialogComponent } from '../event-dialog/event-dialog.component';
import { RunEvent } from '../../../interfaces/event';

@Component({
  selector: 'app-event-dialog-button',
  templateUrl: './event-dialog-screen.component.html',
  styleUrls: ['./event-dialog-screen.component.css']
})
export class DialogScreenComponent implements OnInit {
  @Input() event: RunEvent | undefined;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RaceDialogComponent, {data: this.event});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
