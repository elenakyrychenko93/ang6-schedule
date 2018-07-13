import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HEROES} from '../../data';
import {Hero} from '../../data';


@Component({
  selector: 'app-schedule-table-row',
  templateUrl: './schedule-table-row.component.html',
  styleUrls: ['./schedule-table-row.component.css']
})
export class ScheduleTableRowComponent implements OnInit {
  heroes = HEROES;
  startTime: string;
  endTime: string;
  description: string;
  inputsData;
  // editModeValue = false;
  // @Input editModeValue;
  constructor() { }

  ngOnInit() {
  }

  @Output() onDelete = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<any>();

  deleteItem(id) {
    this.onDelete.emit(id);
  }
  editItem(id, data) {
    console.log(id);
    editInfo = {
      startTime: startTime.value,
      endTime: endTime.value,
      description: description.value
    };
    console.log(editInfo);
    this.onEdit.emit(id, data);
  }

  openEditMode(hero) {
    hero.edit = true;
      this.inputsData = {
        startTime: hero.startTime,
        endTime: hero.endTime,
        description: hero.description
    };
    console.log(this.inputsData);
  }
  saveItem(id, hero) {
    console.log(id);
    hero.edit = false;
    this.onEdit.emit({id: id, inputsData: this.inputsData});
  }
  closeEditMode(hero) {
    hero.edit = false;
    hero.startTime = this.inputsData.startTime;
    hero.endTime = this.inputsData.endTime;
    hero.description = this.inputsData.description;
    // console.log(this.inputsData);
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
