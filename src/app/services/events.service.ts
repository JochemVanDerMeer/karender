import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event';
import { RACES } from '../mock-data/mock-events';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor() { }

  getRaces(): Observable<Event[]> {
    const races = of(RACES);
    return races
  }
}
