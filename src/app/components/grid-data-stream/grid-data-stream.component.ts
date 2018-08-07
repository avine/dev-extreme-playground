import { Component, OnDestroy, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { Subscription } from 'rxjs';

import { Data } from '../../model/data';
import { DataStreamService } from '../../services/data-stream.service';

@Component({
  selector: 'app-grid-data-stream',
  templateUrl: './grid-data-stream.component.html',
  styleUrls: ['./grid-data-stream.component.scss']
})
export class GridDataStreamComponent implements OnInit, OnDestroy {
  dataSource: DataSource;
  data: Data[] = [];
  subscription: Subscription;

  constructor(public dataStreamService: DataStreamService) { }

  ngOnInit() {
    this.subscription = this.dataStreamService.message$.subscribe((data: Data[]) => {
      this.data = data;
      this.dataSource.reload();
    });

    this.dataSource = new DataSource({
      load: (options: any) => {
        console.log(options.skip, options.take);
        return Promise.resolve({ totalCount: 100, data: this.data });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.dataSource.dispose();
  }
}
