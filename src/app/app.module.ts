import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {BarChartModule, PieChartModule, TreeMapModule} from "@swimlane/ngx-charts";
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    PieChartModule,
    BarChartModule,
    RouterModule.forRoot([

    ]),
    TreeMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
