import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RaceDialogComponent } from '../event-dialog/event-dialog.component';

@Component({
  selector: 'app-event-dialog-button',
  templateUrl: './dialog-screen.component.html',
  styleUrls: ['./dialog-screen.component.css']
})
export class DialogScreenComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RaceDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
