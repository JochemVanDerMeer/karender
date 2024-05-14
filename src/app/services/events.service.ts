import { Injectable } from '@angular/core';
import { RunEvent } from '../interfaces/event';
import { RACES } from '../mock-data/mock-events';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RacesService {

  constructor() { }

  getRaces(): Observable<RunEvent[]> {
    const races = of(RACES);
    return races
  }
}
