import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import { DxChartModule, DxTooltipModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    DxChartModule,
    DxTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
