import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

import { DataSpi } from '../../model/data';

@Component({
  selector: 'app-grid-data-source',
  templateUrl: './grid-data-source.component.html',
  styleUrls: ['./grid-data-source.component.scss']
})
export class GridDataSourceComponent implements OnInit, OnDestroy {
  dataSource: DataSource;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dataSource = new DataSource({
      load: (options: any) => {
        const skip = options.skip || 0;
        const take = options.take || 12;
        return this.getData()
          .toPromise()
          .then((data: any) => {
            return {
              data: data.items.slice(skip, skip + take),
              totalCount: data.totalCount
            };
          })
          .catch(error => {
            throw new Error('Data Loading Error');
          });
      }
    });
  }

  ngOnDestroy() {
    this.dataSource.dispose();
  }

  getData() {
    return this.http.get<DataSpi>('assets/data.json');
  }
}
