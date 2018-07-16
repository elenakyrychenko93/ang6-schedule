import {Time} from '@angular/common';

export class Hero {

  startTime: Time;
  endTime: Time;
  description: string;
  edit: boolean;
  id: string;

  constructor(startTime: Time, endTime: Time, description: string, edit: boolean, id: string) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.description = description;
    this.edit = edit;
    this.id = id;
  }

  static getData = () =>  {
    return fetch('https://schedule-a6dc5.firebaseio.com/schedule.json')
      .then(function(response){
        return response.json();
      });
  };

  static addAction = (item) => {
    return fetch('https://schedule-a6dc5.firebaseio.com/schedule.json', {
      method: 'post',
      body: JSON.stringify(item)
    }).then(function(response){
      console.log(item);
      HEROES.push(item);
      return response.json();
    });
  };

  static deleteAction = (id) => {
    return fetch('https://schedule-a6dc5.firebaseio.com/schedule/' + id + '.json', {
      method: 'DELETE',
    }).then(function(response){
      for (let i = 0; i < HEROES.length; i++) {
        if (HEROES[i].id === id) {
          HEROES.splice(i, 1);
        }
      }
      return response.json();
    });
  };

  static updateAction = (id, item) => {
    return fetch('https://schedule-a6dc5.firebaseio.com/schedule/' + id + '.json', {
      method: 'PATCH',
      body: JSON.stringify(item)
    }).then(function(response){
      return response.json();
    });
  };
}

export const HEROES: Hero[] = [];

//

