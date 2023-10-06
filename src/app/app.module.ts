import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgOptimizedImage} from "@angular/common";
import {BarChartModule, PieChartModule, TreeMapModule} from "@swimlane/ngx-charts";
import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import { NavbarComponent } from './main/navbar/navbar.component';
import { ProfileComponent } from './main/content/profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { Homelab2Component } from './main/content/homelab2/homelab2.component';
import { FooterComponent } from './main/footer/footer.component';
import { ServicesComponent } from './main/content/services/services.component';
import { DeliveryFormComponent } from './main/content/delivery-form/delivery-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'main', component: MainComponent,
    children: [
      { path: 'lab', component: Homelab2Component, outlet: 'content-router' },
      { path: 'deliveryForm', component: DeliveryFormComponent, outlet: 'content-router' },
      { path: 'services', component: ServicesComponent, outlet: 'content-router' },
    ]
  },
  { path: '**', component: NotFoundComponent}
]

const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled',
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    WelcomeComponent,
    MainComponent,
    Homelab2Component,
    FooterComponent,
    ServicesComponent,
    DeliveryFormComponent,
    NotFoundComponent,
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage,
        PieChartModule,
        BarChartModule,
        RouterModule.forRoot(routes, routerOptions),
        TreeMapModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
