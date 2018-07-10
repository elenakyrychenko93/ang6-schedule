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

  deleteItem(id) {
    this.onDelete.emit(id);
    console.log(id);
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
