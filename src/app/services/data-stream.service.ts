import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

import DATA from './data-stream.data';

@Injectable({
  providedIn: 'root'
})
export class DataStreamService {
  message$ = interval(2000).pipe(map(number => this.dataSlice));

  constructor() {
  }

  get dataSlice() {
    const size = 10;
    const start = Math.round(Math.random() * DATA.length - size);
    return DATA.slice(start, start + size);
  }
}
