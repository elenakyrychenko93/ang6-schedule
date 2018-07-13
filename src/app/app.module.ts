import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';
import { HeaderComponent } from './header/header.component';
import { ScheduleTableRowComponent } from './schedule-table/schedule-table-row/schedule-table-row.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleTableComponent,
    HeaderComponent,
    ScheduleTableRowComponent,
    AddFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
