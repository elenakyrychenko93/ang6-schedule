import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HEROES} from '../../data';
import {Hero} from '../../data';
import {Time} from '@angular/common';


@Component({
  selector: 'app-schedule-table-row',
  templateUrl: './schedule-table-row.component.html',
  styleUrls: ['./schedule-table-row.component.css']
})
export class ScheduleTableRowComponent implements OnInit {
  heroes = HEROES;
  oldAction;
  newAction;
  @Output() onDelete = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<any>();

  constructor() {  }

  ngOnInit() {  }

  deleteItem(id) {
    this.onDelete.emit(id);
  }

  openEditMode(hero) {
    hero.edit = true;
      this.oldAction = {
        startTime: hero.startTime,
        endTime: hero.endTime,
        description: hero.description
    };
  }

  saveItem(id, hero) {
    this.newAction = {
      startTime: hero.startTime,
      endTime: hero.endTime,
      description: hero.description
    };
    hero.edit = false;
    this.onEdit.emit({id: id, inputsData: this.newAction});
  }

  closeEditMode(hero) {
    hero.edit = false;
    hero.startTime = this.oldAction.startTime;
    hero.endTime = this.oldAction.endTime;
    hero.description = this.oldAction.description;
  }
  // deleteItem($event, id) {
  //   this.onDelete.emit(id);
  //   console.log($event);
  // }
  // changeMode() {
  //   this.editModeValue = !this.editModeValue;
  // }
  // @Output() onChanged = new EventEmitter<boolean>();
  // changeMode(changeModeVal: any) {
  //   this.onChanged.emit(changeModeVal);
  //   this.editModeValue = changeModeVal;
  // }

}
