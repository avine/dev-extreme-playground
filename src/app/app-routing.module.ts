import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { GridCustomStoreComponent } from './components/grid-custom-store/grid-custom-store.component';

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
    path: 'grid-custom-store',
    component: GridCustomStoreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
