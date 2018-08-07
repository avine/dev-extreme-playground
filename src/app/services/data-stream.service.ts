import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

import DATA from './data-stream.data';

@Injectable({
  providedIn: 'root'
})
export class DataStreamService {
  size: 10;

  message$ = interval(2000).pipe(map(number => this.dataSlice));

  constructor() {
  }

  get dataSlice() {
    const start = Math.round(Math.random() * (DATA.length - this.size));
    return DATA.slice(start, start + this.size);
  }
}
