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
  date;
  time;
  speechTime;
  utterance;
  intervalHandler;

  @Output() onDelete = new EventEmitter<string>();
  @Output() onEdit = new EventEmitter<any>();

  constructor() {
    this.intervalHandler = setInterval(self => self.getTime(), 5000, this);
  }

  ngOnInit() {

  }

  getTime() {
    this.date = new Date();
    this.time = this.addZero(this.date.getHours())+':'+this.addZero(this.date.getMinutes());
    // this.time = this.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    console.log(this.time);
    this.checkTime(HEROES);
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  checkTime(obj) {
    for(let item of obj) {
      // console.log(item.startTime);
      if (item.startTime == this.time) {
        console.log(item.startTime, item.description);
        this.utterance = new SpeechSynthesisUtterance(item.description);
        this.utterance.lang = 'ru-RU';
        this.utterance.rate = 0.7;
        this.utterance.pitch = 1.2;
        window.speechSynthesis.speak(this.utterance);
      };
    }
  }

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
