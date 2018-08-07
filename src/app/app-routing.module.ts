import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { GridDataSourceComponent } from './components/grid-data-source/grid-data-source.component';
import { GridDataStreamComponent } from './components/grid-data-stream/grid-data-stream.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/bar-chart'
  },

  {
    path: 'bar-chart',
    component: BarChartComponent
  },

  {
    path: 'grid-data-source',
    component: GridDataSourceComponent
  },

  {
    path: 'grid-data-stream',
    component: GridDataStreamComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
