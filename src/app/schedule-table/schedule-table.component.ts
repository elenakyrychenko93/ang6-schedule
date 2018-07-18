import {Component, Input, OnInit, Output} from '@angular/core';
import {Hero, HEROES} from '../data';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css']
})
export class ScheduleTableComponent implements OnInit {
  heroes = Hero;
  date;
  time;
  utterance;
  intervalHandler;
  audio;

  constructor() { this.intervalHandler = setInterval(self => self.getTime(), 25000, this); }

  ngOnInit() {

  }
  getTime() {
    this.date = new Date();
    this.time = this.addZero(this.date.getHours()) + ':' + this.addZero(this.date.getMinutes());
    // this.time = this.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    this.checkTime(HEROES);
  }

  addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  checkTime(obj) {
    for (let item of obj) {
        if (item.startTime == this.time && obj[0].startTime == this.time) {
          this.playAudio();
          this.readDescription(item);
        } else if (item.startTime == this.time) {
          this.readDescription(item);
        };
    }
  }

  readDescription(item) {
    this.utterance = new SpeechSynthesisUtterance(item.description);
    this.utterance.lang = 'en-EN';
    this.utterance.rate = 0.7;
    this.utterance.pitch = 1.2;
    window.speechSynthesis.speak(this.utterance);
    console.log(this.utterance);
  }

  playAudio(){
    this.audio = new Audio();
    console.log(this.audio.src);
    this.audio.src = '../../assets/sounds/alarm.mp3';
    this.audio.volume = 0.1;
    this.audio.load();
    this.audio.play();
  }

  onDelete(id) {
    this.heroes.deleteAction(id);
  }
  onEdit(data) {
    this.heroes.updateAction(data.id, data.inputsData);
  }

}

