import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import { ContentComponent } from './components/content/content.component';
import { HistoryComponent } from './components/history/history.component';
import {BarChartModule, PieChartModule} from "@swimlane/ngx-charts";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    PieChartModule,
    BarChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
