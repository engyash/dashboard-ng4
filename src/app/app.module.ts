import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { TopNavComponent } from './shared/index';

import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
      AppComponent,
      TopNavComponent
  ],
  imports: [
      BrowserModule,
      RouterModule,
      RouterModule.forRoot(routes),
      DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TopNavComponent]
})
export class AppModule { }
