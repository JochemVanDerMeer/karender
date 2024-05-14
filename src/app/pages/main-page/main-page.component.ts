import { Component, OnInit } from '@angular/core';
import { RacesService } from '../../services/events.service';
import { RunEvent } from '../../interfaces/event';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  events: RunEvent[] = [];

  constructor(private raceService: RacesService) { this.currentDate = ""}

  public currentDate : String;

  ngOnInit(): void {
    this.getRaces();
  }

   formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  }

  showDate(selectedDate : Date): void {
    console.log(this.formatDate(selectedDate))
    this.currentDate = this.formatDate(selectedDate);
  }

  checkDate(selectedDate : String, currentEvent : String): boolean {
    if (selectedDate == currentEvent) {
      return true
    } else {
      return false
    }
  }

  getRaces(): void {
    this.raceService.getRaces()
      .subscribe(events => this.events = events);
  }

}
