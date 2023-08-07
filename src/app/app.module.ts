import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import { ContentComponent } from './components/content/content.component';
import { HistoryComponent } from './components/history/history.component';
import {BarChartModule, PieChartModule} from "@swimlane/ngx-charts";
import {RouterModule} from "@angular/router";
import {ProfileComponent} from "./components/profile/profile.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {NotificationsComponent} from "./components/notifications/notifications.component";
import {BudgetComponent} from "./components/budget/budget.component";

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
    BarChartModule,
    RouterModule.forRoot([
      {path: '', component: ContentComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'notifications', component: NotificationsComponent},
      {path: 'budget', component: BudgetComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
