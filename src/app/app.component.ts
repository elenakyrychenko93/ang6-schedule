import { Component, OnInit } from '@angular/core';
import {Hero} from './data';
import {HEROES} from './data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroes = Hero;

  constructor() { }

  ngOnInit() {
    this.heroes.getData().then((data) => {
      for(let item in data) {
        data[item].id = item;
        data[item].edit = false;
        HEROES.push(data[item]);
      };
    });

  }
}
