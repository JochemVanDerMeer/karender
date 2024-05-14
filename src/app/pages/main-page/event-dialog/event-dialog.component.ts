import { Component, Inject, OnInit } from '@angular/core';
import { RunEvent } from '../../../interfaces/event';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class RaceDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RunEvent) { }

  ngOnInit(): void {
  }

}
