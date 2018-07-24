import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSpi, Data } from '../../model/data';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-grid-custom-store',
  templateUrl: './grid-custom-store.component.html',
  styleUrls: ['./grid-custom-store.component.scss']
})
export class GridCustomStoreComponent implements OnInit {
  dataSource: Partial<DataSource> = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dataSource = new DataSource({
      load: (options: any) => {
        const skip = options.skip || 0;
        const take = options.take || 12;
        console.log(skip, take, options);

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

  /*ngOnInit() {
    const customStore = new CustomStore({
      load: (options: any) => {
        const skip = options.skip || 0;
        const take = options.take || 12;
        console.log(skip, take, options);

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
    this.dataSource.store = customStore as any;
  }*/

  getData() {
    return this.http.get<DataSpi>('assets/data.json');
  }
}
