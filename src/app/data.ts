export class Hero {
  startTime: string;
  endTime: string;
  description: string;
  edit: boolean;
  id: string;


  deleteItem = (id) => {
    for(let i = 0; i < HEROES.length; i++) {
      if(HEROES[i].id == id) {
        HEROES.splice(i, 1);
      }
    }
  };
}

export const HEROES: Hero[] = [
  { startTime: 11, endTime: 20, description: 'Mr. Nice', edit: false, id: 1 },
  { startTime: 12, endTime: 20, description: 'Mr. Nice', edit: false, id: 2 },
  { startTime: 13, endTime: 20, description: 'Mr. Nice', edit: false, id: 3 },
];

//
// addItem = (elem) => {
//   HEROES.push(elem);
// };
