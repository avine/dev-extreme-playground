import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxChartModule, DxDataGridModule, DxTooltipModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { GridDataSourceComponent } from './components/grid-data-source/grid-data-source.component';
import { GridDataStreamComponent } from './components/grid-data-stream/grid-data-stream.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    GridDataStreamComponent,
    GridDataSourceComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DxChartModule,
    DxDataGridModule,
    DxTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
