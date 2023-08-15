import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgOptimizedImage} from "@angular/common";
import { HistoryComponent } from './components/history/history.component';
import {BarChartModule, PieChartModule, TreeMapModule} from "@swimlane/ngx-charts";
import {RouterModule} from "@angular/router";
import {ProfileComponent} from "./components/profile/profile.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {NotificationsComponent} from "./components/notifications/notifications.component";
import {BudgetComponent} from "./components/budget/budget.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SpendingsChartComponent } from './components/budget/spendings-chart/spendings-chart.component';
import { IncomeChartComponent } from './components/budget/income-chart/income-chart.component';
import { AddOperationComponent } from './components/budget/add-operation/add-operation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BudgetComponent,
    HistoryComponent,
    DashboardComponent,
    SpendingsChartComponent,
    IncomeChartComponent,
    AddOperationComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    PieChartModule,
    BarChartModule,
    RouterModule.forRoot([
      {path: '', component: DashboardComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'notifications', component: NotificationsComponent},
      {path: 'budget', component: BudgetComponent,
      children: [
        {path: 'add-operation', component: AddOperationComponent, outlet: 'side'},
        {path: 'spending', component: SpendingsChartComponent, outlet: 'side'},
        {path: 'income', component: IncomeChartComponent, outlet: 'side'},
      ]
      },
      {path: '**', component: ProfileComponent}
    ]),
    TreeMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
