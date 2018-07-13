import {Component, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../data';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css']
})
export class ScheduleTableComponent {
  // editModeValue = false;
  heroes = Hero;
  constructor() { }

  onDelete(id) {
    this.heroes.deleteAction(id);
  }
  onEdit(data) {
    // console.log(data.inputsData);
    this.heroes.updateAction(data.id, data.inputsData);
  }
  // onAdd(data) {
  //   console.log(data);
  //   this.heroes.addAction(data);
  // }

}

