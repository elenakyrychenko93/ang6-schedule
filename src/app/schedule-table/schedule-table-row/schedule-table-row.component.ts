import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HEROES} from '../../data';


@Component({
  selector: 'app-schedule-table-row',
  templateUrl: './schedule-table-row.component.html',
  styleUrls: ['./schedule-table-row.component.css']
})
export class ScheduleTableRowComponent implements OnInit {
  heroes = HEROES;
  // editModeValue = false;
  // @Input editModeValue;
  constructor() { }

  ngOnInit() {
  }

  @Output() onDelete = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<any>();

  deleteItem(id) {
    console.log(id);
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
