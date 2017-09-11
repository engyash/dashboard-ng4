import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { DashboardComponent } from './dashboard.component';





@NgModule({
    imports: [
        CommonModule,
      RouterModule,
      Ng2BootstrapModule.forRoot(),     
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }
