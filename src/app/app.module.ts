import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {BarChartModule, PieChartModule, TreeMapModule} from "@swimlane/ngx-charts";
import {RouterModule, Routes} from "@angular/router";
import { NavbarComponent } from './main/navbar/navbar.component';
import { OverviewComponent } from './main/content/overview/overview.component';
import { BudgetConfigComponent } from './main/content/budget-config/budget-config.component';
import { AddOperationComponent } from './main/content/add-operation/add-operation.component';
import { ProfileComponent } from './main/content/profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { Homelab2Component } from './main/content/homelab2/homelab2.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'main', component: MainComponent,
    children: [
      { path: 'lab', component: Homelab2Component, outlet:'content-router'},
      { path: 'overview', component: OverviewComponent, outlet:'content-router'},
      { path: 'budget', component: BudgetConfigComponent, outlet:'content-router'},
    ]
  },

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    BudgetConfigComponent,
    AddOperationComponent,
    ProfileComponent,
    WelcomeComponent,
    MainComponent,
    Homelab2Component,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    PieChartModule,
    BarChartModule,
    RouterModule.forRoot(routes),
    TreeMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
