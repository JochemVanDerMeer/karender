import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit {

  @Output() selectedDateEvent = new EventEmitter<Date>();

  addSelectedDate(value: Date) {
    this.selectedDateEvent.emit(value)
  }

  selected!: Date ;

  constructor() { }

  ngOnInit(): void {
  }

}
