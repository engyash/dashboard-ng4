﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { SplitPaneModule } from 'ng2-split-pane/lib/ng2-split-pane';
import { SortablejsModule, SortablejsOptions } from 'angular-sortablejs';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        Ng2BootstrapModule.forRoot(),
        SplitPaneModule,
        SortablejsModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashboardModule { }
