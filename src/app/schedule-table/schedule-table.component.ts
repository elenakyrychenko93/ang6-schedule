import {Component, Input, OnInit, Output} from '@angular/core';
import {Hero} from '../data';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css']
})
export class ScheduleTableComponent implements OnInit {
  // editModeValue = false;
  heroes = Hero;
  constructor() { }

  ngOnInit() {
  }
  onDelete(id) {
    console.log('wow', id);
    this.heroes.deleteItem(id);
  }
  // onChanged(changeModeVal:any){
  //   this.editModeValue = changeModeVal;
  //   console.log(changeModeVal);
  // }

}

