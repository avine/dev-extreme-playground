import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { AppRoutingModule } from './app-routing.module';

import { DxChartModule, DxDataGridModule, DxTooltipModule } from 'devextreme-angular';
import { MenuComponent } from './components/menu/menu.component';
import { GridCustomStoreComponent } from './components/grid-custom-store/grid-custom-store.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    MenuComponent,
    GridCustomStoreComponent
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
