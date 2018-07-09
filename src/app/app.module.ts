import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';
import { HeaderComponent } from './header/header.component';
import { ScheduleTableRowComponent } from './schedule-table/schedule-table-row/schedule-table-row.component';
import { CommonModule } from '@angular/common';
import { ScheduleTableRowEditComponent } from './schedule-table/schedule-table-row/schedule-table-row-edit/schedule-table-row-edit.component';
import { ScheduleTableRowStaticComponent } from './schedule-table/schedule-table-row/schedule-table-row-static/schedule-table-row-static.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleTableComponent,
    HeaderComponent,
    ScheduleTableRowComponent,
    ScheduleTableRowEditComponent,
    ScheduleTableRowStaticComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
