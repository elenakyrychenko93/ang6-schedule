import {Component, Input, OnInit, Output} from '@angular/core';
import {HEROES} from '../../../data';

@Component({
  selector: 'app-schedule-table-row-static',
  templateUrl: './schedule-table-row-static.component.html',
  styleUrls: ['./schedule-table-row-static.component.css']
})
export class ScheduleTableRowStaticComponent implements OnInit {
  heroes = HEROES;
  @Output editModeValue;
  constructor() { }

  ngOnInit() {
  }
  update() {
    this.editModeValue = true;
  }

}
