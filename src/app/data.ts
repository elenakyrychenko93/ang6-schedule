export class Hero {

  startTime: number;
  endTime: number;
  description: string;
  edit: boolean;
  id: string;

  constructor(startTime: number, endTime: number, description: string, edit: boolean, id: string) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.description = description;
    this.edit = edit;
    this.id = id;
  }


  static deleteItem = (id) => {
    console.log('del');
    for (let i = 0; i < HEROES.length; i++) {
      if (HEROES[i].id === id) {
        HEROES.splice(i, 1);
      }
    }
  }

  static addItem = (data) => {
    console.log(data);
    // HEROES.push(elem);
  }
}

export const HEROES: Hero[] = [
  new Hero(11, 20, 'Mr. Nice', false, '1q'),
  new Hero(12, 21, 'Mr. Nice', false, '2q'),
  new Hero(13, 22, 'Mr. Nice', false, '3q')
];

//

