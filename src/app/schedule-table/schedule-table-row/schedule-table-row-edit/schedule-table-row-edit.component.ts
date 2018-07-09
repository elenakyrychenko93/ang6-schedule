import {Component, Input, OnInit, Output} from '@angular/core';
import {HEROES} from '../../../data';

@Component({
  selector: 'app-schedule-table-row-edit',
  templateUrl: './schedule-table-row-edit.component.html',
  styleUrls: ['./schedule-table-row-edit.component.css']
})
export class ScheduleTableRowEditComponent implements OnInit {
  heroes = HEROES;
  @Output editModeValue;
  constructor() { }

  ngOnInit() {
  }
  back() {
    this.editModeValue = false;
  }

}
